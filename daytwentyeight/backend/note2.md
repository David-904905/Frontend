# Response Model

- If you declare both a return type and a response model, the response model will take priority over the return type in fastAPI.

- To first use the EmailStr class of pydantic, you have to install email validator

```bash

pip install email-validator

```

## Redirect Response

- To make use of RedirectResponse, you have to import it from fastapi.responses.

```Python

from fastapi import FastAPI
from fastapi.responses import RedirectResponse

app = FastAPI()

@app.get("/teleport")
async def get_teleport() -> RedirectResponse:
    return RedirectResponse(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")


```

- This works because RedirectResponse is a subclass of Response.

- If you try to return anything else that is not a valid Pydantic type, e.g a database object, and you annotate it like that in a function, FastAPI will try to create a Pydantic response model from that type annotation, and will fail.

- The samething happens if you have a union between two different types where one or more of them are not valid pydantic types.

e.g

```Python
from fastapi import FastAPI, Response
from fastapi.responses import RedirectResponse

app = FastAPI()


@app.get("/portal")
async def get_portal(teleport: bool = False) -> Response | dict:
    if teleport:
        return RedirectResponse(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    return {"message": "Here's your interdimensional portal."}

```

- To override this, you have to set the response_model value of the decorator to None. e.g

```Python

from fastapi import FastAPI, Response
from fastapi.responses import RedirectResponse

app = FastAPI()


@app.get("/portal", response_model=None)
async def get_portal(teleport: bool = False) -> Response | dict:
    if teleport:
        return RedirectResponse(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    return {"message": "Here's your interdimensional portal."}


```

- If you have parameters in your response model that you would like to leave out, lets say default values of some items, if they are missing, you can use the response_model_exclude_unset for that

```Python

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    namel: str
    description: str | None = None
    price: float
    tax: float = 10.5
    tags: list[str] = []


items = {
    "foo" {"name": "Foo", "price" 50.2},
    "bar": {"name": "Bar", "description": "The bartenders", "price": 62, "tax": 20.2},
    "baz": {"name": "Baz", "description": None, "price": 50.2, "tax": 10.5, "tags": []},
}

@app.get("/items/{item_id}", response_model=Item, response_model_exclude_unset=True)
async def read_item(item_id: str):
    return items[item_id]

```
