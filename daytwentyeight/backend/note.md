# Introduction to FastAPI

## Asynchronous Operations

- If you are using third party libraries that tell you to call them with await, then declare your path operation functions with async def

``` Python

@app.get('/')
async def read_results():
    results = await database_stuff()
    return results

```

- Modern python supports asynchronous code using coroutines, with async and await syntax

- The operations that usually cause the computer to wait for something else to finish is usually called I/O operations. They are relatively slow.

- Synchronous code is also known as sequential code.

- Paralellism is using multiple cpu's to work on a specific task, spreading the load evenly amongst them, but in paralellism, the computer has to be synchronised with the cpu? as agains concurrency where the computer can do other things while waiting for the operation to yield results.

### Parallelism
- Definition: Performing multiple operations simultaneously by using multiple CPUs or cores. Synchronization is often required, especially when multiple parallel tasks work on shared data or need to combine their results.

### Concurrency
- Definition: Structuring a program to handle multiple tasks at once, but not necessarily simultaneously. Instead, tasks may interleave using techniques like context switching. Handle multile tasks efficiently by switching between them while waiting.

- It is less about tight synchronization, more about managing shared state carefully.

- The work done by the computer is called a cpu bound problem

- When you define a function with async def, if you want to get the result, you have to await it.

### Coroutines

- Coroutine is what is returned by an asynchronous function. Python knows that it is something like a function, that it can start and that it will end at some point, but that it might be paused internally too, whenever there is an await inside of it.


## Virtual Environments

- To show which virtual environment you are using, use the command 

``` bash

which python

```

- When you install packages, the compressed files are downloaded, usually from PyPI and then extracted into a directory that comes with your installation, if you have a virtual environment, those files are stored in a directory in the virtual environment

## Setting up uv

- To install uv, use the following command 

``` bash

pip install uv

```

- To install a package, use the following command

``` bash

uv pip install <package_name>

```

- To install from a requirements file, use the following command

``` bash

uv pip install -r requirements.txt

```




## OpenAPI

- FastAPI generates a "schema" with all your API using the OpenAPI standard for defining APIs.

- Schema is a definition or description of something. Not the "code" that implements it, but just an abstract description.


# Path Parameters

## Predefined Values

- If you have a path operation that receives a path parameter, but you want the possible valid path parameter values to be predefined, you can use a standard Python Enum.

## Request Body

- When you need to send data from a cliekt (let's say, a browser) to your API, you send it as a request body. A request body is data sent by the client to your API. A response body is data sent by your API back to your client.

- To send data, you should use one of: POST (the more common), PUT, DELETE or PATCH.


# Query Parameters and String Validation

## Annotated

- Annotated in python allows developers to declare the type of a reference and provide additional information related to it.

``` Python

from typing import Annotated

name: Annotated[str, name.isupper] = 'AMANDA'

```

- Annotated attaches metadata to a variable which at runtime can be accessed via .__metadata__. It is used extensively in libraries that use Pydantic.

- When using Query inside annotated, you cannot use the default parameter for Query.

- You can define a regular expression pattern that the parameter should match.



## Custom Validation

- To add additional validation to a string, you need to use pydantics aftervalidator, which would validate the first valdation has been performed. like confirming the data's type



## Path Parameters and Numeric Validations

- In the same way that you can declare more validations and metadata for query parameters with Query, you can declare the same type of validations and meta data for path parameters with Path.


- Note, you have to order the parameters as you need them, placing none defaults before defaults, that is values dont have a default value before values that have a default value.

``` Python

from typing import Annotated

from fastapi import FastAPI, Path

app = FastAPI()


@app.get("/items/{item_id}")
async def read_items(
    item_id: Annotated[int, Path(title="The ID of the item to get")], q: str
):
    results = {"item_id": item_id}
    if q:
        results.update({"q": q})
    return results


```

- If you are using annotated, this wont matter.


# Number Validations

- With Query and Path, and some other classes, you can declare number constraints, such as greater than, less than etc.


## Exampls

``` Python

from typing import Annotated

from fastapi import FastAPI, Path

app = FastAPI()


@app.get("/items/{item_id}")
async def read_items(
    item_id: Annotated[int, Path(title="The ID of the item to get", ge=1)], q: str
):
    results = {"item_id": item_id}
    if q:
        results.update({"q": q})
    return results

```

- For number validations, some of the built-in comparisons we can perform are:

    1. gt -> greater than
    2. ge -> greater than or equal
    3. lt -> less than
    4. le -> less than or equal


- Query, Path, and other classes you will see later are subclasses of a common Param class.

- When you call Query, Path and others from fastapi, they are actually functions. That when called, return instances of classes of the same name. So you import Query, which is a function. And when you call it, it returns an instance of a class also named Query. 




# Query Parameter Models

- If you have a group of query parameters that are related, you can create a Pydantic model to declare them.


# Multiple Parameters

- You can declare multiple parameters, and then fastapi will notice that there are more than one body parameter in the function, so it will then use the parameter names as keys in the body of the json to be received.


``` Python

@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item, user: User):
    results = {"item_id": item_id, "item": item, "user": user}
    return results


```


``` JSON

{
    "item": {
        "name": "Foo",
        "description": "The pretender",
        "price": 42.0,
        "tax": 3.2
    },
    "user": {
        "username": "dave",
        "full_name": "Dave Grohl"
    }
}


```



# Body Parameters

- You can instruct fastapi to treate a parameter as a body parameter using the Body() function.

``` Python

async def update_item(
    item_id: int,
    item: Item,
    user: User,
    importance: Annotated[int, Body()]
):

```

- the importance will be treated as a Body, alongside item and user.

- By default singluar values are interpreted as query parameters, you don't have to explicitly add a Query, you can just do:

``` Python

q: Union[str, None] = None


```

Or in python 3.10

``` Python


q: str | None = None


```


# Body Fields

- You can declare validation and meta data for pydantic models using pydantic's Field.

``` Python


class Item(BaseModel):
    name: str,
    description: str | None = Field(
        default=None, title='The description of the item', max_length=300
    )
    price: float = Field(gt=0, description='The price must be greater than zero')


```

# Body Nested Models

- To use type validation for set, to ensure unique characters, use the following

``` Python

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
    tags: set[str] = set() # This will make this field a set.


```


# Declare Request Example Data

- You can declare examples of the data your app can receive. This will be used by the documentation to provide additional information on the sample data that can be expected from that endpoint

``` Python

class Item(BaseModel):
    name: str,
    description: str | None = None
    price: float
    tax: float | None = None

    model_config = {
        "json_schema_extra": {
            "examples" : [
                {
                    "name: "Foo",
                    "description: "A very nice item",
                    "price": 35.4,
                    "tax": 3.2
                }
            ]
        }
    }


```

- When using Field() with Pydantic models, you can also declare additional examples.


- Open API specific path parameter examples

``` Python

from typing import Annotated

from fastapi import Body, FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None


@app.put("/items/{item_id}")
async def update_item(
    *,
    item_id: int,
    item: Annotated[
        Item,
        Body(
            openapi_examples={
                "normal": {
                    "summary": "A normal example",
                    "description": "A **normal** item works correctly.",
                    "value": {
                        "name": "Foo",
                        "description": "A very nice Item",
                        "price": 35.4,
                        "tax": 3.2,
                    },
                },
                "converted": {
                    "summary": "An example with converted data",
                    "description": "FastAPI can convert price `strings` to actual `numbers` automatically",
                    "value": {
                        "name": "Bar",
                        "price": "35.4",
                    },
                },
                "invalid": {
                    "summary": "Invalid data is rejected with an error",
                    "value": {
                        "name": "Baz",
                        "price": "thirty five point four",
                    },
                },
            },
        ),
    ],
):
    results = {"item_id": item_id, "item": item}
    return results


```

- There are other data types you can also use such as UUID which you can import from the uuid module.


# Cookie Parameters

- You can declare Cookie parameters the same way you define Query and Path parameters.

- To do this first, you need to import cookie from fastapi

``` Python

from typing import Annotated
from fastapi import Cookie, FastAPI

app = FastAPI()

@app.get('/items/')
async def read_items(ads_id: Annotated[str | None, Cookie()] = None):
    return {"ads_id": ads_id}