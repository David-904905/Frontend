from typing import Annotated, Any
from fastapi import FastAPI, Cookie

from models.cookies import Cookies
from models.payloads import MultipleParams
from models.product_model import Product

app = FastAPI()

# writing the routes
# Multiple model parameters

@app.post('/api/multi-param/')
async def multi_param(payload: MultipleParams) -> dict:
    results = {"payload": payload}
    return results


# A cookie is a text file that a website stores on a user's computer to remember information about them.

@app.get("/cookie-stuff/")
async def cookie_endpoint(ads_id: Annotated[str | None, Cookie()] = None) -> dict:
    return {"ads_id": ads_id}


@app.get("/cookie-with-type/")
async def cookie_with_type(cookies: Annotated[Cookies, Cookie()]) -> dict:
    return cookies


# the response_model is from the decorator, and is not a function parameter
@app.get('/response-decorator/', response_model=Product)
async def get_with_response_decorator() -> Any:
    return [
        {"name": "Portal Gun", "price": 42.3},
        {"name": "Portal Gun", "price": 42.3},
    ]