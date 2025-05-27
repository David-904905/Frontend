from pydantic import BaseModel

class Cookies(BaseModel):
    # forbid extra cookies

    model_config = {"extra": "forbid"}
    
    session_id: str
    ndu_tracker: str | None = None
    marshall_id: str | None = None