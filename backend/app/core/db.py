from pymongo import MongoClient
from app.core.config import config


def get_database():
   CONNECTION_STRING = config.db.connection_string

   client = MongoClient(CONNECTION_STRING)

   return client["Novobud"]


db = get_database()
