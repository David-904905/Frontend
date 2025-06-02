# fastapi
from fastapi import FastAPI, Query, Path
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

# typing
from typing import Annotated

# pydantic
from pydantic import AfterValidator

# random
import random

# utils
from models.payloads import ContactUs
from utils.validators.movie_bk_validator import check_valid_id

# database section
from database.products import items
from database.movies import movie_data

# models
from models.product_model import Product
from models.filter_model import FilterParams

# enums
from enums.model_enum import ModelName

# data
from datetime import date

# requests
import requests

app = FastAPI()

# api_version = '/api/v1'

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# the cors allows your api to be used by other external applications.

@app.get('/')
async def root():
    return {"message": "Hello world welcome home"}

# get a specific item.
@app.get("/items/{item_id}")
async def read_item(item_id: int): # type: ignore
    try:
        item = items[item_id]
    except IndexError:
        return {"item": None , "error": "the product you searched for was not found"}
    return { "item": item, "error": None}


@app.get("/model/{model_name}")
async def read_module_name(model_name: ModelName):

    # you can get the actual value of an enumeration using the value attribute of the object.
    # model_name.value
    match model_name:
        case ModelName.alexnet:
            return {"model_name": model_name, "message": "Deep Learning FTW!"}
        case ModelName.lenet:
            return {"model_name": model_name, "message": "LeCNN all the images"}
        case ModelName.resnet:
            return {"model_name": model_name, "message": "Have some residuals"}
        case _:
            return
            
    
@app.get("/files/{file_path:path}")
async def read_file(file_path: str):
    # This is a path that contains a filepath, like john/file/file.txt
    return {"file_path": file_path}


# query parameters
# query parameters go after the ? in the url, they are optional, and hence can have default values.
# http://127.0.0.1:8000/products/?skip=0&limit=3

# parsing converts a string from an http request into python.

@app.get("/products/")
async def read_products(skip: int = 0, limit: int = len(items)):
    return items[skip : skip + limit]

# Optional parameters

@app.get("/items-v2/{item_id}")
async def read_item(item_id: int, q: str | None = None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}

# Request Body

@app.post("/products/create/")
async def create_product(item: Product):
    items.append(item)
    print(items)
    return JSONResponse({"message": "success"}, status_code=201)


# Additional validation using Query and Annotated
# you import Query from fastapi

@app.get("/controlled-items/")
async def read_item_controlled(q: Annotated[str | None, Query(min_length=3, max_length=50)] = None):
    results = {"items": items}
    if q:
        results.update({"q": q}) # type: ignore
    return results

# adding regualar expressions
@app.get("/regex-route/")
async def read_regexed_items(
    q: Annotated[
        str | None, Query(min_length=3, max_length=50, pattern="abcdone$")
    ] = None,
):
    # you can declare that a parameter can accept None, but that it's still required. This would force clients
    # to send a value, even if the value is None

    results = {"items": items}
    if q:
        results.update({"q": q}) # type: ignore
    return results

# when you define a query parameter explicitly with Query you can also declare it to receive a list of values, i.e receive 
# multiple values.
# q: Annotated[list[str] | None, Query()] = None // to explicitly declare a parameter with type list, you have to use Query()
# if not it would be interpreted as type list.
# This is what the url will look like http://localhost:8000/items/?q=foo&q=bar
# you can also give it a default parameter
# q: Annotated[list[str] | None, Query()] = ['foo', 'bar']

# you can also create more meta data about a parameter, like title, description, alias or specify if that parameter is deprecated.

@app.get("/more-meta/")
async def use_more_metadata(
    q: Annotated[
        str | None, 
        Query(
            title="Query string",
            description="Endpoint to more information blah",
            min_length=3,
            max_length=10,
            pattern="^[a-zA-Z0-9]{3,}$",
            alias="more-meta-haha",
            deprecated=True,
        )
    ]  = None,
):
    # the endpoint will be something similar to this http://localhost:8000/more-meta/?more-meta-haha=water
    # notice we used more-meta-haha our alias instead of q.
    if q:
        return {"q": q}
    return {"response": "No data"}

# Custom validation

@app.get("/movie/")
async def get_movie_or_book(
    id: Annotated[str | None, AfterValidator(check_valid_id)] = None
):
    if id:
        item = movie_data.get(id)
    else:
        id, item = random.choice(list(movie_data.items()))
    return {"id": id, "name": item}


# using path to declare meta data and for validation

@app.get("/someitem/")
async def get_some_item(
    item_id: Annotated[str | None, Path(title="The id of the item to get")],
    q: Annotated[str | None, Query(alias="item-query")] = None,
):
    results = {"item_id": item_id}
    if q:
        results.update({"q": q})
    return results


@app.get("/validate-number/")
async def validate_number(
    number: Annotated[int, Query(gt=5, lt=10)]
):
    # in this code, the number passed in would be less than 3 and greater han 5
    return {"number": number}

# filter params, creating a model for your data validation

@app.get("/filter-item/")
async def filter_item(
    filter_query: Annotated[FilterParams, Query()]
):
    return filter_query


# for main application

@app.get("/api/v1/today-quote/")
async def get_daily_quote():
    request = await requests.get('https://zenquotes.io/api/today')
    if request:
        data = request.json()
        cleaned_data: dict = data[0]
        day = date.today().day
        cleaned_data.update({"id": day})
        return cleaned_data
    return {"error": "Sorry, could not fetch today's quote"}

@app.post("api/v1/user/profile/update-picture/")

@app.post("/user/profile/update-picture/")
async def update_profile_picture(uuid: str, image_url: str) -> JSONResponse:
    """
    Description: Update the profile picture of a specific user\n
    Params:\n
        uuid: str -> users unique identification\n
        image_url: str -> the cloudinary url of the users profile image\n
    Return:\n
        Http Response
    """
    ...

# contact us message route

@app.post("/api/v1/contact-us/")
async def contact_us(payload: ContactUs):
    print(payload)
    return {"message": "successful"}