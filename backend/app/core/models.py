import re
from typing import List, Optional, Any, Dict, Tuple
from pydantic import BaseModel, Field, HttpUrl, model_validator
from bson import ObjectId
from pydantic.functional_validators import BeforeValidator
from typing_extensions import Annotated
import logging

logger = logging.getLogger("uvicorn.error")
logger.setLevel(logging.DEBUG)

PyObjectId = Annotated[str, BeforeValidator(str)]
Unknown = "Не вказано"

# TODO: make rates sync to global rates
rates = {"UAH": 0.024, "EUR": 1.04, "USD": 1}


def convert_to_usd(amount, target_currency):
    try:
        return rates[target_currency] * amount
    except KeyError:
        logger.debug(
            f"Unknown currency {target_currency}. Defaulting to USD conversion."
        )
        return amount


class MongoBaseModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        populate_by_name = True


class PriceModel(BaseModel):
    original_price: float
    original_currency: str
    converted_price: float
    converted_currency: str

    @classmethod
    def parse_price_string(cls, price_str: str) -> Tuple[float, str]:
        """Parse price string to amount and currency."""
        cleaned_price = price_str.replace(" ", "").replace(",", ".")

        match = re.match(r"(\d+(?:\.\d+)?)\s*(грн\.|USD|\$|€|EUR)", cleaned_price)
        if not match:
            raise ValueError(f"Cannot parse price string: {price_str}")

        amount = float(match.group(1))
        currency = match.group(2)

        currency_map = {
            "грн.": "UAH",
            "$": "USD",
            "€": "EUR",
            "EUR": "EUR",
            "USD": "USD",
        }

        return amount, currency_map.get(currency, currency)

    @model_validator(mode="before")
    @classmethod
    def validate_price_structure(cls, data: Any) -> Dict[str, Any]:
        if isinstance(data, str):
            # Handle string price (e.g., "500 грн.")
            try:
                amount, currency = PriceModel.parse_price_string(data)

                return {
                    "original_price": amount,
                    "original_currency": currency,
                    "converted_price": convert_to_usd(amount, currency),
                    "converted_currency": "USD",
                }
            except (IndexError, ValueError):
                logger.debug(f"Invalid price input: {data}")
                pass

        elif isinstance(data, dict):
            # Handle nested structure
            if "original" in data:
                original = data.get("original", {})
                converted = data.get("convert", {})
                return {
                    "original_price": original.get("original_price", 0.0),
                    "original_currency": original.get("original_currency", "UAH"),
                    "converted_price": converted.get("converted_price", 0.0),
                    "converted_currency": converted.get("converted_currency", "USD"),
                }
            # Handle flat structure - return as is
            elif "original_price" in data:
                return data

        return {
            "original_price": 0.0,
            "original_currency": "UAH",
            "converted_price": 0.0,
            "converted_currency": "USD",
        }


class SquareAreaModel(BaseModel):
    amount: float
    unit: str

    @model_validator(mode="before")
    @classmethod
    def validate_square_area(cls, data: Any) -> Dict[str, Any]:
        if isinstance(data, str):
            try:
                match = re.fullmatch(r"(\d+\.?\d*)\s*(\D+)", data.strip())
                if match:
                    amount = float(match.group(1))
                    unit = match.group(2)
                    return {"amount": amount, "unit": unit}
            except (IndexError, ValueError):
                logger.debug("Invalid area input: %s", data)
        elif isinstance(data, dict):
            return {"amount": data.get("amount", 0.0), "unit": data.get("unit", "м²")}

        return {"amount": 0.0, "unit": Unknown}

class ContactModel(BaseModel):
    contact_name: str
    phone_number: str


class CommercialListing(MongoBaseModel):
    title: str = Field(default="")
    price: PriceModel
    square_area: SquareAreaModel
    contact: Optional[ContactModel] = None
    phone_number: Optional[str] = None
    floor: Optional[int] = None
    link: HttpUrl = Field(default="https://example.com")
    date: str = Field(default="")
    images: List[HttpUrl] = Field(default_factory=list)
    type: str = Field(default="")
    ownership: Optional[str] = Unknown
    description: Optional[str] = Unknown
    street: Optional[str] = Unknown


class CommercialListingCollection(BaseModel):
    commerce: List[CommercialListing]
