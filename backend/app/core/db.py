import motor.motor_asyncio
from app.core.config import config


def get_client():
   client = motor.motor_asyncio.AsyncIOMotorClient(config.db.connection_string)
   return client

def get_database():
   db = get_client().get_database("Novobud")
   return db

db = get_database()

commerce = db.get_collection("commerce")
