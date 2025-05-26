from pydantic import BaseModel, HttpUrl, FilePath

class Image(BaseModel):
    url: HttpUrl
    name: str
    location: FilePath