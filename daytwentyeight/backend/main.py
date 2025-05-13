from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# products section
from database.products import items

app = FastAPI()

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



@app.get('/')
async def root():
    return {"message": "Hello world welcome home"}

# get a specific item.
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    try:
        item = items[item_id]
    except IndexError:
        return {"item": None , "error": "the product you searched for was not found"}
    return { "item": item, "error": None}