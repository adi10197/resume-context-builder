# DevOps Engineer Resume Type

This resume type is optimized for DevOps, Platform Engineering, and Site Reliability Engineering positions with focus on infrastructure, automation, and reliability.

## Specific Rules

### Target Audience
- DevOps Engineer positions
- Site Reliability Engineer (SRE) roles
- Platform Engineer positions
- Cloud Engineer roles
- Infrastructure Engineer positions

### Emphasis Areas
1. **Infrastructure as Code** - Terraform, CloudFormation, Pulumi
2. **CI/CD Pipelines** - Automation, deployment strategies, release management
3. **Cloud Platforms** - AWS, GCP, Azure architecture and services
4. **Reliability** - Monitoring, alerting, incident response, SLOs/SLIs
5. **Containerization** - Docker, Kubernetes, orchestration
6. **Security** - DevSecOps, compliance, secrets management

### Section Order
1. Header (Name and Contact Info)
2. Technical Skills (prominently featured)
3. Professional Experience
4. Certifications (important for DevOps - AWS, GCP, Kubernetes)
5. Education
6. Projects (optional)

## Technical Skills Section Format

Group skills into infrastructure-relevant categories:
```markdown
## Technical Skills

**Cloud Platforms**: AWS (EC2, EKS, Lambda, RDS, S3), GCP, Azure
**Infrastructure as Code**: Terraform, CloudFormation, Pulumi, Ansible
**Containers & Orchestration**: Docker, Kubernetes, Helm, ECS
**CI/CD**: GitHub Actions, Jenkins, GitLab CI, ArgoCD, Spinnaker
**Monitoring & Observability**: Prometheus, Grafana, Datadog, PagerDuty, ELK Stack
**Languages/Scripting**: Python, Bash, Go, YAML
**Security**: Vault, AWS IAM, RBAC, SOC2, container scanning
**Networking**: VPC, DNS, Load Balancers, CDN, Service Mesh
```

## Experience Bullet Point Guidelines

### Prioritize
- Infrastructure automation and IaC adoption
- CI/CD pipeline design and optimization
- Cost optimization and resource efficiency
- Reliability improvements (uptime, MTTR, incident reduction)
- Security hardening and compliance
- Developer experience improvements
- Migration projects (cloud, Kubernetes, etc.)
- Scalability achievements

### De-emphasize
- Application feature development
- UI/UX work
- Business analysis
- Non-technical project management

### Example Bullet Points
- Designed and implemented Kubernetes platform serving 200+ microservices, achieving 99.99% uptime and reducing deployment time from hours to minutes
- Built CI/CD pipelines using GitHub Actions and ArgoCD, enabling 50+ daily deployments with zero-downtime releases
- Reduced AWS infrastructure costs by 40% ($500K/year) through right-sizing, spot instances, and automated scaling policies
- Implemented infrastructure as code using Terraform, managing 500+ cloud resources across 3 AWS accounts with full audit trail
- Decreased mean time to recovery (MTTR) from 2 hours to 15 minutes through improved monitoring, alerting, and runbook automation
- Led migration of 50+ services from EC2 to EKS, improving resource utilization by 60% and enabling horizontal auto-scaling

## Certifications Section

DevOps certifications carry significant weight:
```markdown
## Certifications

- AWS Solutions Architect Professional (2024)
- Certified Kubernetes Administrator (CKA) (2023)
- HashiCorp Terraform Associate (2023)
- AWS DevOps Engineer Professional (2022)
```

## Technologies Section per Role

For each position, include infrastructure-specific tech stack:
```markdown
**Technologies**: AWS, Terraform, Kubernetes, GitHub Actions, Prometheus, Python
```

## Job Description Tailoring

When job description is provided:
- Match cloud provider experience (AWS vs GCP vs Azure)
- Emphasize relevant orchestration platform (Kubernetes vs ECS vs Nomad)
- Highlight CI/CD tools mentioned in job posting
- Feature security and compliance work if mentioned
- Match monitoring stack experience to requirements
- Emphasize scale metrics relevant to role (requests/sec, cluster size, etc.)

## What to Minimize
- Frontend development work
- Product management activities
- Non-technical soft skills emphasis
- Outdated technologies (unless specifically relevant)

## Metrics to Highlight

DevOps roles are highly metrics-driven:
- Deployment frequency (X deployments per day/week)
- Uptime percentages (99.9%, 99.99%)
- Cost savings ($ amount or percentage)
- MTTR improvements
- Infrastructure scale (servers, containers, requests)
- Automation coverage percentages
- Incident reduction rates
