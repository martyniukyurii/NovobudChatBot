from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

class BaseConfig(BaseSettings):
    model_config = SettingsConfigDict(
        # Use top level .env file (one level above ./backend/)
        env_file="../.env",
        env_ignore_empty=True,
        extra="ignore",
    )

class DatabaseConfig(BaseConfig):
    model_config = SettingsConfigDict(env_prefix="db_")
    
    connection_string: str

class ApiConfig(BaseConfig):
    model_config = SettingsConfigDict(env_prefix="api_")

    version: str

class Config(BaseSettings):
    db: DatabaseConfig = Field(default_factory=DatabaseConfig)
    api: ApiConfig = Field(default_factory=ApiConfig)
    @classmethod
    def load(cls) -> "Config":
        return cls()

config = Config.load()

