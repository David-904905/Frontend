from pydantic import BaseModel, EmailStr, Field

from models.userxitem_model import Item, User

class MultipleParams(BaseModel):
    user: User
    item: Item



class ContactUs(BaseModel):
    name: str
    email: EmailStr
    message: str = Field(min_length=3, max_length=128)