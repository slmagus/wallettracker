from pydantic import BaseModel, Field, PrivateAttr
from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from web3 import Web3, AsyncWeb3
from typing import Optional
import uuid
import json
router = APIRouter()

walletstable = {}

class Wallet(BaseModel):
    address: str
    owner: str
    description: Optional[str]
    balance: Optional[float] | None = None
    
class FeaturedWallet(BaseModel):
    id: uuid.UUID = Field(default_factory=uuid.uuid4)
    wallet: Wallet

@router.get("/wallets/{wallet_id}")
async def read_wallets(wallet_id: str):
    return walletstable.get(wallet_id)
 
@router.get("/wallets/")
async def get_wallets():
    return walletstable

@router.get("/walletsdebug/")
async def get_debug():
    pass

@router.post("/wallets/", status_code=201)
async def create_wallet(wallet: Wallet):
    fw = FeaturedWallet(wallet=wallet)
    walletstable[fw.id] = jsonable_encoder(wallet)
    return fw.id

async def walletBalance(address):
    return web3.eth.get_balance(wallets[address])