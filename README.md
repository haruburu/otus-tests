# otus-tests
Подготовка стенда:
```
helm repo add grafana https://grafana.github.io/helm-charts
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install grafana grafana/grafana -n grafana
helm install prometheus prometheus-community/prometheus -n prometheus
```
