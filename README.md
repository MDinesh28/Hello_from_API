# Web API Application

This is a simple web application with an API, built using Node.js and Express, and deployed on Kubernetes for scalability.

## Prerequisites

- **Node.js** (v14+)
- **Docker**
- **Kubernetes Cluster** (Minikube or any cloud provider)

# Setup Instructions

### 1. Clone the repository:

    git clone https://github.com/yourusername/web-api-app.git

    cd web-api-app
## Install dependencies:

    npm install
## Run the application:

    npm start
The application will start on http://localhost:3000.

## Dockerize the Application:

### Build the Docker image:

    docker build -t yourusername/web-api-app .
    
### Run the Docker container:

    docker run -p 3000:3000 yourusername/web-api-app
    
## Deploy on Kubernetes

Ensure your Kubernetes cluster is running, then apply the manifests:

    kubectl apply -f deployment.yaml
    
    kubectl apply -f service.yaml
    
## Access the Application

After deployment, you can access the API via the external IP assigned by the Kubernetes LoadBalancer. To get the external IP:

    kubectl get svc web-api-app-service
    
Once the service is ready, visit the IP address on your browser to interact with the API.

## Scaling

Kubernetes allows for automatic scaling based on resource usage. You can scale the app manually by running:

    kubectl scale deployment web-api-app --replicas=5

License

This project is licensed under the MIT License.
