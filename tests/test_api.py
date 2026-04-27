import pytest
from fastapi.testclient import TestClient
from backend.src.main import app

# Devopstrio AVD for Developers
# Unified Integration Tests for Engineering Platform

client = TestClient(app)

def test_health_check_operational():
    """Verify that the platform services are reportable and live."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "operational"

def test_workspace_listing():
    """Ensure that the platform can retrieve active engineering desktops."""
    response = client.get("/workspaces")
    assert response.status_code == 200
    data = response.json()
    assert len(data) > 0
    assert "developer" in data[0]

def test_provision_request_flow():
    """Verify that a workspace provision request is correctly accepted."""
    payload = {
        "developer_id": "mani-dev-01",
        "persona": "Backend-Go",
        "region": "uksouth",
        "is_ephemeral": True
    }
    response = client.post("/workspaces/provision", json=payload)
    assert response.status_code == 202
    assert "job_id" in response.json()
    assert response.json()["status"] == "Accepted"

def test_toolchain_catalog_discovery():
    """Ensure that developers can find pre-packaged SDK toolchains."""
    response = client.get("/toolchains")
    assert response.status_code == 200
    data = response.json()
    assert any(tc["name"] == "Node.js Fullstack" for tc in data)

def test_security_posture_retrieval():
    """Verify that the platform reports on the security health of dev environments."""
    response = client.get("/security/posture")
    assert response.status_code == 200
    assert "overall_score" in response.json()
    assert response.json()["overall_score"] > 80

def test_performance_analytics_reporting():
    """Check that productivity metrics (build times) are exposed."""
    response = client.get("/analytics/summary")
    assert response.status_code == 200
    assert "avg_build_time_optimization" in response.json()
