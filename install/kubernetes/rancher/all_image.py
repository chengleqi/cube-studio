# 所需要的所有镜像
images = [
    'busybox',
    'rancher/backup-restore-operator:v1.0.2',
    'rancher/banzaicloud-fluentd:v1.11.2-alpine-2',
    'rancher/banzaicloud-logging-operator:3.6.0',
    'rancher/calico-cni:v3.13.4',
    'rancher/calico-cni:v3.16.1',
    'rancher/calico-ctl:v3.13.4',
    'rancher/calico-ctl:v3.16.1',
    'rancher/calico-kube-controllers:v3.13.4',
    'rancher/calico-kube-controllers:v3.16.1',
    'rancher/calico-node:v3.13.4',
    'rancher/calico-node:v3.16.1',
    'rancher/calico-pod2daemon-flexvol:v3.13.4',
    'rancher/calico-pod2daemon-flexvol:v3.16.1',
    'rancher/cis-operator:v1.0.1',
    'rancher/cluster-proportional-autoscaler:1.7.1',
    'rancher/cluster-proportional-autoscaler:1.8.1',
    'rancher/configmap-reload:v0.3.0-rancher2',
    'rancher/coredns-coredns:1.6.2',
    'rancher/coredns-coredns:1.6.5',
    'rancher/coredns-coredns:1.6.9',
    'rancher/coredns-coredns:1.7.0',
    'rancher/coreos-etcd:v3.3.15-rancher1',
    'rancher/coreos-etcd:v3.4.13-rancher1',
    'rancher/coreos-etcd:v3.4.3-rancher1',
    'rancher/coreos-flannel:v0.12.0',
    'rancher/coreos-flannel:v0.13.0-rancher1',
    'rancher/coreos-kube-state-metrics:v1.9.7',
    'rancher/coreos-prometheus-config-reloader:v0.38.1',
    'rancher/coreos-prometheus-operator:v0.38.1',
    'rancher/curlimages-curl:7.70.0',
    'rancher/directxman12-k8s-prometheus-adapter-amd64:v0.6.0',
    'rancher/eks-operator:v1.0.4',
    'rancher/flannel-cni:v0.3.0-rancher6',
    'rancher/fleet-agent:v0.3.1',
    'rancher/fleet:v0.3.1',
    'rancher/fluent-bit-out-syslog:0.1.0',
    'rancher/fluent-fluent-bit:1.5.4',
    'rancher/fluent-fluent-bit:1.5.4-debug',
    'rancher/fluentd:v0.1.19',
    'rancher/gitjob:v0.1.8',
    'rancher/grafana-grafana:6.7.4',
    'rancher/grafana-grafana:7.1.5',
    'rancher/hyperkube:v1.16.15-rancher1',
    'rancher/hyperkube:v1.17.13-rancher1',
    'rancher/hyperkube:v1.18.10-rancher1',
    'rancher/hyperkube:v1.19.3-rancher1',
    'rancher/istio-1.5-migration:0.1.1',
    'rancher/istio-citadel:1.5.9',
    'rancher/istio-coredns-plugin:0.2-istio-1.1',
    'rancher/istio-galley:1.5.9',
    'rancher/istio-install-cni:1.7.3',
    'rancher/istio-installer:1.7.3-rancher2',
    'rancher/istio-kubectl:1.4.6',
    'rancher/istio-kubectl:1.5.10',
    'rancher/istio-kubectl:1.5.9',
    'rancher/istio-mixer:1.5.9',
    'rancher/istio-mixer:1.7.3',
    'rancher/istio-node-agent-k8s:1.5.9',
    'rancher/istio-pilot:1.5.9',
    'rancher/istio-pilot:1.7.3',
    'rancher/istio-proxyv2:1.5.9',
    'rancher/istio-proxyv2:1.7.3',
    'rancher/istio-sidecar_injector:1.5.9',
    'rancher/jaegertracing-all-in-one:1.14',
    'rancher/jenkins-jnlp-slave:3.35-4',
    'rancher/jetstack-cert-manager-controller:v0.8.1',
    'rancher/jettech-kube-webhook-certgen:v1.2.1',
    'rancher/jimmidyson-configmap-reload:v0.2.2',
    'rancher/jimmidyson-configmap-reload:v0.3.0',
    'rancher/k3s-upgrade:v1.17.13-k3s2',
    'rancher/k3s-upgrade:v1.18.10-k3s2',
    'rancher/k3s-upgrade:v1.19.3-k3s2',
    'rancher/k8s-dns-dnsmasq-nanny:1.15.0',
    'rancher/k8s-dns-dnsmasq-nanny:1.15.10',
    'rancher/k8s-dns-dnsmasq-nanny:1.15.2',
    'rancher/k8s-dns-kube-dns:1.15.0',
    'rancher/k8s-dns-kube-dns:1.15.10',
    'rancher/k8s-dns-kube-dns:1.15.2',
    'rancher/k8s-dns-node-cache:1.15.13',
    'rancher/k8s-dns-node-cache:1.15.7',
    'rancher/k8s-dns-sidecar:1.15.0',
    'rancher/k8s-dns-sidecar:1.15.10',
    'rancher/k8s-dns-sidecar:1.15.2',
    'rancher/kiali-kiali:v1.17',
    'rancher/kiali-kiali:v1.24.0',
    'rancher/kiwigrid-k8s-sidecar:0.1.151',
    'rancher/klipper-helm:v0.2.3',
    'rancher/klipper-helm:v0.2.7',
    'rancher/klipper-helm:v0.3.0',
    'rancher/klipper-lb:v0.1.2',
    'rancher/kube-api-auth:v0.1.4',
    'rancher/kubectl:v1.18.0',
    'rancher/kubectl:v1.18.6',
    'rancher/kubernetes-external-dns:v0.7.3',
    'rancher/library-busybox:1.31.1',
    'rancher/library-nginx:1.19.2-alpine',
    'rancher/library-traefik:1.7.19',
    'rancher/local-path-provisioner:v0.0.11',
    'rancher/local-path-provisioner:v0.0.14',
    'rancher/log-aggregator:v0.1.7',
    'rancher/longhornio-csi-attacher:v2.0.0',
    'rancher/longhornio-csi-node-driver-registrar:v1.2.0',
    'rancher/longhornio-csi-provisioner:v1.4.0',
    'rancher/longhornio-csi-resizer:v0.3.0',
    'rancher/longhornio-longhorn-engine:v1.0.2',
    'rancher/longhornio-longhorn-instance-manager:v1_20200514',
    'rancher/longhornio-longhorn-manager:v1.0.2',
    'rancher/longhornio-longhorn-ui:v1.0.2',
    'rancher/metrics-server:v0.3.4',
    'rancher/metrics-server:v0.3.6',
    'rancher/minio-minio:RELEASE.2020-07-13T18-09-56Z',
    'rancher/nginx-ingress-controller-defaultbackend:1.5-rancher1',
    'rancher/nginx-ingress-controller:nginx-0.35.0-rancher2',
    'rancher/opa-gatekeeper:v3.1.0-beta.7',
    'rancher/openpolicyagent-gatekeeper:v3.1.1',
    'rancher/openzipkin-zipkin:2.14.2',
    'rancher/pause:3.1',
    'rancher/pause:3.2',
    'rancher/pipeline-jenkins-server:v0.1.4',
    'rancher/pipeline-tools:v0.1.15',
    'rancher/plugins-docker:18.09',
    'rancher/prom-alertmanager:v0.21.0',
    'rancher/prom-node-exporter:v1.0.1',
    'rancher/prom-prometheus:v2.12.0',
    'rancher/prom-prometheus:v2.18.2',
    'rancher/prometheus-auth:v0.2.1',
    'rancher/pstauffer-curl:v1.0.3',
    'rancher/pushprox-client:v0.1.0-rancher1-client',
    'rancher/pushprox-proxy:v0.1.0-rancher1-proxy',
    'rancher/rancher-agent:v2.4.8',
    'rancher/rancher-agent:v2.5.2',
    'rancher/rancher-operator:v0.1.1',
    'rancher/rancher-webhook:v0.1.0-beta7',
    'rancher/rancher:v2.5.2',
    'rancher/rke-tools:v0.1.66',
    'rancher/security-scan:v0.1.14',
    'rancher/security-scan:v0.2.1',
    'rancher/shell:v0.1.5',
    'rancher/sonobuoy-sonobuoy:v0.16.3',
    'rancher/squareup-ghostunnel:v1.5.2',
    'rancher/system-upgrade-controller:v0.6.2',
    'rancher/tekton-utils:v0.1.0',
    'rancher/thanosio-thanos:v0.15.0',
    'rancher/webhook-receiver:v0.2.4',
    'registry:2'
]

images = list(set(images))
# 通过私有仓库，将公有镜像下发到内网每台机器上，例如内网ai.tencentmusic.com的仓库
HOST = 'ai.tencentmusic.com/tme-public/'

for image in images:
    # print(image)
    image = image.replace('<none>', '')
    image_name = HOST + image.replace(HOST,'').replace('/', '-').replace('@sha256', '')

    # 可联网机器上拉取公有镜像并推送到私有仓库
    # print('docker pull %s' % image)
    # print('docker tag %s %s' % (image, image_name))
    # print('docker push %s' % (image_name))

    # 内网机器上拉取私有仓库镜像
    image=image.replace('@sha256','')
    print("docker pull %s" % image_name)
    print("docker tag %s %s"%(image_name,image))







