from fastapi import FastAPI

from models.payloads import MultipleParams

app = FastAPI()

# writing the routes
# Multiple model parameters

@app.post('/api/multi-param/')
async def multi_param(payload: MultipleParams):
    results = {"payload": payload}
    return results