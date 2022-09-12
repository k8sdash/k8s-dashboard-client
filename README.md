# K8S Dashboard Client

K8S Dashboard client is a lightweight react webapp that consumes the [K8S Dashboard API](https://github.com/k8sdash/k8s-dashboard-api)

## TL;DR
```
kubectl apply -f https://raw.githubusercontent.com/k8sdash/k8s-dashboard-charts/main/deploy-k8sdash-kubernetes.yaml
```

![K8S dashboard React Client](https://github.com/k8sdash/k8s-dashboard-www-static/raw/main/src/k8s-dashboard-grid.gif)

## Installation

#### Prerequisites
* [K8S Dashboard API](https://github.com/k8sdash/k8s-dashboard-api)
* Kubernetes 1.19+
* Preferably an nginx ingress 

## Technologies
### Code Base
* [React](https://reactjs.org/)
* [MaterialUI](https://mui.com/)
* [SignalR](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr)
* [ag-grid](https://www.ag-grid.com/react-data-grid/)
* [Docker](https://www.docker.com/)

### CICD
* GitHub Actions
* SonarCloud.io
* Docker
* Docker Hub

## Contributing
GitHub pull requests are welcome!
