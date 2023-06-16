from fastapi.testclient import TestClient
from main import app
import uuid
import pytest

client = TestClient(app)


@pytest.mark.order(3)
def test_gets_wallets():
    response = client.get("/wallets")
    assert response.status_code == 200

@pytest.mark.order(2)    
@pytest.mark.dependency(depends=["test_post_wallet"])
def test_get_wallet():
    wallet_id = pytest.shared
    response = client.get("/wallets/" + wallet_id)
    assert response.status_code == 200
    assert response == pytest.shared

@pytest.mark.order(1)
@pytest.mark.dependency()
def test_post_wallet():
    #data = {
    #"address": "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    ##"owner": "owner",
    #"description": "descriptiondata",
    #"balance": 1
    #}
    
    data = {
    'address': 'string',
    'owner': 'string',
    'description': 'string',
    'balance': 0
    }
    
    response = client.post("/wallets", json=data)
    
    pytest.shared = response.text
    assert response.status_code == 201
    uuid = str(response.text)
    
    #assert is_valid_uuid(response.text) == True

def is_valid_uuid(value):
    try:
        uuid.UUID(str(value))
        return True
    except ValueError:
        return False
    
    
def pytest_namespace():
    return {'shared': None}