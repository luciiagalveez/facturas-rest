pipeline{

    agent any

    stage("Descargar el código de la app"){
        steps{
            git "https://github.com/luciiagalveez/facturas-rest.git"
        }
    }

    stage("Creación de imagen"){
        steps{
            bat "docker build -t lgalvez/app1 ."
        }
        
    }

    stage("Ejecución de contenedor"){
        steps{
            bat "docker run -d --name app1 -p 8081:8080 lgalvez/app1"
        }
        
    }

    stage("Test del servicio"){
        echo "Probando el servicio .."
    }

    stage("Cerrar recursos"){
        steps{
            bat "stop stop app1"
            bat "docker container rm app1"
            bat "docker image rm lgalvez/app1"
        }
       
    }

}
