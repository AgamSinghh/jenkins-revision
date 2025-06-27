pipeline {

    agent any
    
    environment {
        IMAGE_NAME = 'nodeapp_practice:v1'
        CONTAINER_NAME = 'jenkins_revise'
    }

    stages {
        stage('Cloning the repo'){
            steps{
               echo("Already cloned")
                sh 'ls -la'
            }
        }

        stage('Stopping and removing the existing containers'){
            steps{
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }

        stage('Building the docker images'){
            steps{
                echo("Building image ...")
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Running the docker container'){
            steps{
                sh "docker run -d --name ${CONTAINER_NAME} -p 8000:8000 ${IMAGE_NAME}"
            }
        }

    }

    post{
        always {
            echo "Cleaning up the <none> tag images"
            sh 'docker image prune -f'
        }
        success {
            echo "Build and deployment successful!"
        }
        failure{
            echo "Build or deployment failed!"
        }
    }
}