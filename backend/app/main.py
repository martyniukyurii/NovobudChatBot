from app.core.config import config
from fastapi import FastAPI
from app.api.main import api_router

app = FastAPI(
    debug=True,
    title="Commercial Listings API",
    summary="An API to manage commercial listings in MongoDB.",
)

app.include_router(api_router, prefix="/api/" + config.api.version)