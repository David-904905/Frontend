from pydantic import BaseModel

from models.userxitem_model import Item, User

class MultipleParams(BaseModel):
    user: User
    item: Item