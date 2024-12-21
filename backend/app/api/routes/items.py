from datetime import datetime
from typing import Optional
from fastapi import APIRouter, Query
from app.core.db import commerce
from app.core.models import CommercialListingCollection


router = APIRouter(prefix="/items", tags=["items"])

@router.get(
    "/",
    response_description="List all commercial items",
    response_model=CommercialListingCollection,
    response_model_by_alias=False,
)
async def list_listings():
    """
    List all commercial items.
    """
    listings = await commerce.find().to_list()
    
    return CommercialListingCollection(commerce=listings)


@router.get(
    "/filter",
    response_description="Filtered commercial items",
    response_model=CommercialListingCollection,
    response_model_by_alias=False,
)
async def filter_listings(
    type: Optional[str] = Query(None, description="Тип нерухомості (напр. квартира, офіс)"),
    location: Optional[str] = Query(None, description="Географія пошуку (місто, район)"),
    min_price: Optional[float] = Query(None, description="Мінімальна ціна ($)"),
    max_price: Optional[float] = Query(None, description="Максимальна ціна ($)"),
    date_from: Optional[str] = Query(None, description="Дата від (YYYY-MM-DD)"),
    date_to: Optional[str] = Query(None, description="Дата до (YYYY-MM-DD)"),
    min_area: Optional[float] = Query(None, description="Мінімальна площа (м²)"),
    max_area: Optional[float] = Query(None, description="Максимальна площа (м²)"),
):
    # Завантажуємо всі записи з бази даних
    all_listings = CommercialListingCollection(commerce=await commerce.find().to_list())

    # Фільтрація записів
    filtered_listings = [
        listing for listing in all_listings.commerce
        if (
            (not type or listing.type == type) and
            (not location or location.lower() in listing.street.lower()) and
            (not min_price or listing.price.converted_price >= min_price) and
            (not max_price or listing.price.converted_price <= max_price) and
            (not date_from or datetime.strptime(listing.date, "%Y-%m-%d %H:%M:%S") >= datetime.strptime(date_from, "%Y-%m-%d")) and
            (not date_to or datetime.strptime(listing.date, "%Y-%m-%d %H:%M:%S") <= datetime.strptime(date_to, "%Y-%m-%d")) and
            (not min_area or listing.square_area.amount >= min_area) and
            (not max_area or listing.square_area.amount <= max_area)
        )
    ]

    return CommercialListingCollection(commerce=filtered_listings)