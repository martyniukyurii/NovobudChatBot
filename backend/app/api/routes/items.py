from fastapi import APIRouter
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