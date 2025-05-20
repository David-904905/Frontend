from typing import Literal

from pydantic import BaseModel, Field

class FilterParams(BaseModel):
    # this line of code prevents the user from entering any extra query parameter
    model_config = {"extra": "forbid"}

    limit: int = Field(100, gt=0, le=100)
    offset: int = Field(0, ge=0)
    order_by: Literal['created_at', 'updated_at'] = 'created_at'
    tags: list[str] = []