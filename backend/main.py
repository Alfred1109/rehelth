from fastapi import FastAPI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create FastAPI app
app = FastAPI(
    title="ReHelthSystem",
    description="A health management system backend",
    version="0.1.0",
    docs_url="/docs",      # Swagger UI
    redoc_url="/redoc"     # ReDoc documentation
)

@app.get("/")
async def root():
    return {"message": "Welcome to ReHelthSystem"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
