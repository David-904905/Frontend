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
