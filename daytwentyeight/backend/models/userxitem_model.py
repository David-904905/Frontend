from typing import Annotated
from pydantic import AfterValidator, BaseModel, Field, EmailStr

from utils.validators.banned_users import banned_users

class Item(BaseModel):
    name: str
    description: str
    price: float
    discount: float  


class User(BaseModel):
    userId: Annotated[str, AfterValidator(banned_users)]
    username: str
    email: EmailStr
    password: str = Field(min_length=8, max_length=256) # yeah lol redundant. I know


