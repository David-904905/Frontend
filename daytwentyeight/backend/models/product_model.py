from pydantic import BaseModel, Field

class Product(BaseModel):
    id: int
    title: str = Field(examples=['Supreme quality rag', 'Supreme quality baby clothing'])
    description: str | None = Field(default=None, examples=['Cloth for a child', 'rag for a chair'])
    price: float