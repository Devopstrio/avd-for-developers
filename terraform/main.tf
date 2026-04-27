# Devopstrio AVD for Developers
# Cloud Engineering Infrastructure (Terraform)
# Target: Azure RM

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.90"
    }
  }
}

provider "azurerm" {
  features {}
}

# 1. Core Resource Group
resource "azurerm_resource_group" "dev_rg" {
  name     = "rg-avd-dev-workstations-prd"
  location = "uksouth"
  tags = {
    Environment = "Production"
    Team        = "Engineering-Platform"
    Project     = "AVD-For-Developers"
  }
}

# 2. Virtual Network for Engineering Workspaces
resource "azurerm_virtual_network" "dev_vnet" {
  name                = "vnet-avd-dev-global"
  address_space       = ["10.40.0.0/16"]
  location            = azurerm_resource_group.dev_rg.location
  resource_group_name = azurerm_resource_group.dev_rg.name
}

resource "azurerm_subnet" "workstation_subnet" {
  name                 = "snet-workstations"
  resource_group_name  = azurerm_resource_group.dev_rg.name
  virtual_network_name = azurerm_virtual_network.dev_vnet.name
  address_prefixes     = ["10.40.1.0/24"]
}

# 3. High-Performance Host Pool (Pooled for efficiency)
resource "azurerm_virtual_desktop_host_pool" "dev_pool" {
  name                     = "vdpool-eng-standard"
  location                 = azurerm_resource_group.dev_rg.location
  resource_group_name      = azurerm_resource_group.dev_rg.name
  type                     = "Pooled"
  load_balancer_type       = "DepthFirst" # Focus on dense use of high-spec nodes
  maximum_sessions_allowed = 8
  friendly_name            = "Standard Engineering Cluster"
}

# 4. GPU-Enabled Host Pool (For AI/ML & Compilation)
resource "azurerm_virtual_desktop_host_pool" "gpu_pool" {
  name                = "vdpool-eng-gpu-accelerated"
  location            = azurerm_resource_group.dev_rg.location
  resource_group_name = azurerm_resource_group.dev_rg.name
  type                = "Personal" # GPUs are usually dedicated per heavy user
  load_balancer_type  = "Persistent"
  friendly_name       = "AI & Graphics Lab"
}

# 5. Azure Compute Gallery (Image Storage)
resource "azurerm_shared_image_gallery" "dev_gallery" {
  name                = "gal_avd_dev_artifacts"
  resource_group_name = azurerm_resource_group.dev_rg.name
  location            = azurerm_resource_group.dev_rg.location
  description         = "Golden images for cloud development workstations."
}

# 6. Key Vault for Dev Secrets & SSH Keys
resource "azurerm_key_vault" "dev_vault" {
  name                        = "kv-avd-dev-secrets"
  location                    = azurerm_resource_group.dev_rg.location
  resource_group_name         = azurerm_resource_group.dev_rg.name
  enabled_for_disk_encryption = true
  tenant_id                   = "your-tenant-id"
  sku_name                    = "standard"

  access_policy {
    tenant_id = "your-tenant-id"
    object_id = "your-object-id"

    secret_permissions = ["Get", "List", "Set"]
  }
}

# Outputs
output "vnet_id" {
  value = azurerm_virtual_network.dev_vnet.id
}

output "standard_pool_id" {
  value = azurerm_virtual_desktop_host_pool.dev_pool.id
}
