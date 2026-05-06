<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="90" alt="Devopstrio Logo" />

<h1>Azure Virtual Desktop (AVD) for Developers</h1>

<p><strong>Enterprise Cloud Workstations & Intelligent Engineering Infrastructure</strong></p>

[![Developer Experience](https://img.shields.io/badge/Strategy-DevEx_Standard-522c72?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)
[![Platform](https://img.shields.io/badge/Compute-AVD_Developer_Desktop-0078d4?style=for-the-badge&logo=microsoftazure&labelColor=000000)](https://devopstrio.co.uk/)
[![Productivity](https://img.shields.io/badge/Metric-Build_Optimized-success?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)
[![Security](https://img.shields.io/badge/Security-Isolated_Dev_Lanes-962964?style=for-the-badge&labelColor=000000)](/apps/security-engine)

</div>

---

## 🏛️ Executive Summary

**AVD for Developers** is a flagship enterprise platform designed to revolutionize the way engineering teams work. In the modern era of remote and hybrid work, providing developers with high-performance, secure, and standardized workstations is a competitive necessity.

This platform automates the delivery of **Cloud Development Workstations**, providing engineers with ephemeral, pre-configured environments that include everything from VS Code and IntelliJ to Docker, Kubernetes, and specialized AI/ML toolchains. By decoupling the development environment from physical hardware, organizations can protect source code, accelerate onboarding from weeks to minutes, and enable high-performance compute (including GPU acceleration) for build-heavy or AI-centric workloads.

### Strategic Business Outcomes
- **Accelerated Onboarding**: Provision a production-ready, security-hardened developer environment in under 10 minutes for new hires and contractors.
- **Enhanced Source Code Protection**: Maintain all intellectual property within the secure Azure boundary with zero-trust data loss prevention (DLP) controls.
- **Optimized Engineering Performance**: Move build-heavy workloads to high-spec Azure NV-series or D-series VMs, reducing local wait times and improving developer joy.
- **Global Collaboration & Accessibility**: Enable seamless remote engineering for global teams with low-latency access to regional cloud workstations.

---

## 🏗️ Technical Architecture Details

### 1. High-Level Developer Workspace Architecture
```mermaid
flowchart TD
    Dev["Global Developer"] --> Portal["DevPortal / API Gateway"]
    Portal["DevPortal / API Gateway"] --> WorkspaceE["Workspace Provisioning Engine"]
    WorkspaceE["Workspace Provisioning Engine"] --> AVD["AVD Host Pools"]
    
    subgraph EngineeringStack["Engineering Stack"]
        ImageE["Golden Image Engine"]
        ToolchainE["Toolchain Automation"]
        SecurityE["Security Guardrails"]
    end
    
    subgraph Infrastructure["Infrastructure"]
        Compute["High-Performance / GPU SKU"]
        Storage["Dev Persistence / Home Drives"]
        Registry["Secure Container Registry"]
    end
    
    ImageE --> AVD
    ToolchainE --> AVD
    SecurityE --> AVD
    AVD --> Compute
    AVD --> Storage
```

### 2. Workspace Provisioning Workflow
```mermaid
sequenceDiagram
    participant Eng as Developer
    participant API as Platform API
    participant Engine as Workspace Engine
    participant Azure as Azure ARM / AVD
    participant Tool as Toolchain Engine

    Eng->>API: Request Ephemeral Dev Environment
    API->>Engine: Validate Entitlement & Quota
    Engine->>Azure: Deploy Session Host (Auto-scaled)
    Azure-->>Engine: Host Ready
    Engine->>Tool: Inject Project Toolchains (SDKs, IDEs)
    Tool-->>Eng: Workspace Details Provided (RDP/Web)
```

### 3. Ephemeral Environment Lifecycle
```mermaid
flowchart TD
    Trigger["Dev Starts Sprint Task"] --> Provision["Provision Clean Workspace"]
    Provision["Provision Clean Workspace"] --> Context["Sync Git Repo & Environment Secrets"]
    Context["Sync Git Repo & Environment Secrets"] --> Active["Coding Session"]
    Active["Coding Session"] --> Daily["End of Day: Hibernation"]
    Active["Coding Session"] --> Finish["End of Task: Terminate & Cleanup"]
```

### 4. Golden Image Pipeline (Hacker-Ready)
```mermaid
flowchart LR
    Base["Windows 11 Multi-Session"] --> Middleware["Install IDEs: VSCode/Choco"]
    Middleware["Install IDEs: VSCode/Choco"] --> Engineering["Language SDKs: Node/Python/Go"]
    Engineering["Language SDKs: Node/Python/Go"] --> Hardening["Security Agents & CIS Baseline"]
    Hardening["Security Agents & CIS Baseline"] --> Image["Compute Gallery Version"]
```

### 5. Toolchain Install Flow
```mermaid
flowchart TD
    Select["User Selects Stack"] --> Manifest["Fetch YAML Toolchain Definition"]
    Manifest["Fetch YAML Toolchain Definition"] --> Exec["Run Silent Installers"]
    Exec["Run Silent Installers"] --> Verify["Confirm PATH & Version"]
    Verify["Confirm PATH & Version"] --> Notify["Ready to Code"]
```

### 6. Security Trust Boundary
```mermaid
flowchart TD
    Client["Local Laptop"] --> MFA["MFA / Conditional Access"]
    MFA["MFA / Conditional Access"] --> Gateway["Azure AVD Gateway"]
    Gateway["Azure AVD Gateway"] --> Host["Developer VM"]
    Host["Developer VM"] -.->|Blocked| Internet["Unrestricted Web"]
    Host["Developer VM"] -->|Allowed| Intranet["Private Git / CI-CD"]
```

### 7. AVD Global Engineering Topology
```mermaid
flowchart LR
    Hub["Global Orchestrator"] --> Region1["EMEA - UK South"]
    Hub["Global Orchestrator"] --> Region2["AMER - East US"]
    Hub["Global Orchestrator"] --> Region3["APAC - Central AU"]
    Region1["EMEA - UK South"] --> Pool["GPU Dev Pool"]
```

### 8. API Request Lifecycle
```mermaid
flowchart LR
    Request["POST /workspaces/provision"] --> Auth["Verify JWT & RBAC"]
    Auth["Verify JWT & RBAC"] --> Service["Orchestration Service"]
    Service["Orchestration Service"] --> Worker["Background Provisioner"]
    Worker["Background Provisioner"] --> Status["Update DB Result"]
```

### 9. Multi-Tenant Engineering Model
```mermaid
flowchart TD
    Org["Global Engineering"]
    Org["Global Engineering"] --> BU1["FinTech Team"]
    Org["Global Engineering"] --> BU2["Mobile Apps Team"]
    Org["Global Engineering"] --> BU3["External Contractors"]
    BU3["External Contractors"] --> Isolation["Strict VNET Silo"]
```

### 10. Monitoring & Telemetry Flow
```mermaid
flowchart LR
    Metrics["CPU/Mem/IO"] --> OTEL["OpenTelemetry"]
    OTEL["OpenTelemetry"] --> Prometheus["Storage"]
    Prometheus["Storage"] --> Grafana["Performance Dashboard"]
```

### 11. Disaster Recovery Topology
```mermaid
flowchart TD
    Primary["London Cluster"] --> Sync["Profile & Code Sync"]
    Sync["Profile & Code Sync"] --> Secondary["Zurich Cluster"]
    Primary["London Cluster"] -.->|Outage| Switch["Failover Redirect"]
```

### 12. Contractor Isolated Access Flow
```mermaid
flowchart TD
    C["Contractor"] --> Auth["Extra ID B2B"]
    Auth["Extra ID B2B"] --> AppG["Restricted App Group"]
    AppG["Restricted App Group"] --> Proxy["Secure Terminal Gateway"]
    Proxy["Secure Terminal Gateway"] --> VM["Isolated Dev VM"]
```

### 13. GPU Workstation Model (AI/ML)
```mermaid
flowchart LR
    Model["ML Development"] --> VM["NV-Series VM"]
    VM["NV-Series VM"] --> CUDA["NVIDIA CUDA Core"]
    CUDA["NVIDIA CUDA Core"] --> Training["High Speed Epoch Execution"]
```

### 14. CI/CD Operations Pipeline
```mermaid
flowchart LR
    Config["Workspace Logic Change"] --> Lint["Linting & SAST"]
    Lint["Linting & SAST"] --> Build["Containerize Engine"]
    Build["Containerize Engine"] --> AKS["Deploy Orchestrators"]
```

### 15. Executive Governance Workflow
```mermaid
flowchart TD
    Metric["Measure Build Times"] --> Report["Engineering Velocity Report"]
    Report["Engineering Velocity Report"] --> Board["Executive Visibility"]
    Board["Executive Visibility"] --> Optim["Infrastructure Adjustment"]
```

### 16. Developer Onboarding Flow
```mermaid
flowchart TD
    HR["HR System Entry"] --> Trigger["Auto-Account Creation"]
    Trigger["Auto-Account Creation"] --> Preset["Define Dev Persona"]
    Preset["Define Dev Persona"] --> Env["Pre-warm Workspace"]
    Env["Pre-warm Workspace"] --> Welcome["Send Access Email"]
```

### 17. Identity Federation Model
```mermaid
flowchart LR
    Client["Browser"] --> SAML["Azure AD SAML"]
    SAML["Azure AD SAML"] --> Portal["Dev Platform Portal"]
    Portal["Dev Platform Portal"] --> Token["Exchange for Workspace Access"]
```

### 18. Repo Access Workflow
```mermaid
flowchart TD
    Login["Login to Host"] --> Secrets["Vault Injection"]
    Secrets["Vault Injection"] --> SSH["Load Git SSH Keys"]
    SSH["Load Git SSH Keys"] --> Clone["Allowed Repo Access"]
```

### 19. Global Region Topology
```mermaid
flowchart TD
    Global["Global Control Plane"]
    Global["Global Control Plane"] --> Cluster1["EMEA Clusters"]
    Global["Global Control Plane"] --> Cluster2["US Clusters"]
```

### 20. Productivity Analytics Flow
```mermaid
flowchart LR
    Logins["Session Durations"] --> Metrics["Developer UX Metrics"]
    Metrics["Developer UX Metrics"] --> Dashboard["Engineering Health Score"]
```

---

## 🚀 Experience The Platform

### Terraform Provisioning
```bash
cd terraform/environments/prd
terraform init
terraform apply -auto-approve
```

---
<sub>&copy; 2026 Devopstrio &mdash; Engineering the Future of Secure Distributed Engineering.</sub>
