pipeline{

    agent any

    stages{
        stage("Descargar el codigo de la app"){
            steps{
                git "https://github.com/luciiagalveez/facturas-rest.git"
            }
        }

        stage("Creacion de imagen"){
            steps{
                bat "docker build -t lgalvez/app1 ."
            }
            
        }

        stage("Ejecucion de contenedor"){
            steps{
                bat "docker run -d --name app1 -p 8081:8080 lgalvez/app1"
            }
            
        }

        stage("Test del servicio"){
            steps{
                echo "Probando el servicio .."
            }
        }

        stage("Cerrar recursos"){
            steps{
                bat "docker stop app1"
                bat "docker container rm app1"
                bat "docker image rm lgalvez/app1"
            }
        
        }
    }
}
