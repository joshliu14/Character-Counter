from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["POST"],
    allow_headers=["Content-type"]
)


class Text(BaseModel):
    text: str


@app.post("/count")
async def count_characters(paragraph: Text):
    return {"length": len(paragraph.text)}