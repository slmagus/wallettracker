from pydantic import BaseModel, Field
from fastapi import APIRouter
from web3 import Web3, AsyncWeb3
from typing import Optional
import uuid
router = APIRouter()

walletstable = {}

class Wallet(BaseModel):
    address: str
    owner: str
    description: Optional[str]
    balance: Optional[float] | None = None




@router.get("/wallets/{wallet_id}")
async def read_wallets(wallet_id):
    try:
        return walletstable[wallet_id]
    except KeyError:
        return {"Invalid Wallet ID"}
 
@router.get("/wallets/")
async def get_wallets():
    return walletstable

@router.post("/wallets/")
async def create_wallet(wallet: Wallet):
    walletstable[str(uuid.uuid4())] = wallet
    return wallet

async def walletBalance(address):
    return web3.eth.get_balance(wallets[address])