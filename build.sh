#!/bin/bash

# Arrête le script en cas d'erreur
set -e

# Vérifie si Docker est en cours d'exécution
if ! docker info > /dev/null 2>&1; then
    echo "Le daemon Docker ne semble pas être en cours d'exécution."

    # Démarrage de Docker pour Linux/macOS
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo "Tentative de démarrage de Docker (Linux)..."
        sudo service docker start
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        echo "Tentative de démarrage de Docker (macOS)..."
        open /Applications/Docker.app
    elif [[ "$OSTYPE" == "msys"* ]]; then
        echo "S'il vous plaît, démarrez Docker Desktop manuellement sur Windows."
        exit 1
    fi
fi

# Attente pour que Docker démarre
echo "Attente que Docker soit prêt..."
sleep 10

# Supprime les anciens conteneurs de l'image emma
echo "Suppression des anciens conteneurs de l'image emma..."
docker ps -a | grep 'emma' | awk '{print $1}' | xargs -r docker rm

# Supprime les anciennes images de emma
echo "Suppression des anciennes images de emma..."
docker images | grep 'emma' | awk '{print $3}' | xargs -r docker rmi

# Nettoie le terminal
clear

# Construit l'image Docker
echo "Construction de l'image Docker..."
docker build -t emma:latest .

# Nettoie le terminal
clear

# Exécute le conteneur Docker
echo "Démarrage du conteneur Docker..."
docker run -p 3000:3000 --name emma_container emma:latest
