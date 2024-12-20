from fastapi import FastAPI
from app.core.db import db

app = FastAPI()


@app.get("/")
async def root():
    data = list(db["commerce"].find())
    for item in data:
        item["_id"] = str(item["_id"])
    return {"data": data}
