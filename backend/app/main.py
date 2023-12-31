from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import wallets


origins = [
    "http://localhost:3000",
]



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(wallets.router)
@app.get("/")
async def root():
    return {"msg": "Hello World"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)