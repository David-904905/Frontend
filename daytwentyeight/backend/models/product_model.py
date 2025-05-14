from pydantic import BaseModel

class Product(BaseModel):
    id: int
    title: str
    description: str | None = None
    price: float