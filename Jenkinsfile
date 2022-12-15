pipeline {
  agent any
  environment {
    PROJECT_ID = 'top-chain-365110'
    CLUSTER_NAME = 'k8s'
    LOCATION = 'asia-northeast3-a'
    CREDENTIALS_ID = 'dockercredential'
	}
stages {
    stage("Checkout code") {
      steps {
        checkout scm
      }
    }
    stage("Build image") {
			steps { 
				script {
          myapp = docker.build("sunseo18/opensource_node:${env.BUILD_ID}")
        }
			} 
		}
		stage("Push image") {
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            myapp.push("latest")
            myapp.push("${env.BUILD_ID}")
					} 
				}
			} 
		}
	  stage('Deploy to GKE') {
      when {
        branch 'main'
      }
			steps{
				sh "sed -i 's/hello:latest/hello:${env.BUILD_ID}/g' deployment.yaml"
				step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME,
location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID,
verifyDeployments: true])
			} 
		}
	}
}
