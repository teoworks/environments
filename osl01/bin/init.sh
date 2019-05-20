#!/bin/bash

set -e

NETWORKS=(
    "public_proxy"
    "postgres"
   	"kafka"
)

VOLUMES=(
    "jenkins"
    "registry"
    "postgres"
    "portainer"
)

NETWORK_LABEL="com.teoworks.type=network"
VOLUME_LABEL="com.teoworks.type=volume"

for NETWORK in ${NETWORKS[@]}
do
    if docker network ls | grep -qE "*\s${NETWORK}\s*"; then
        echo "Docker network \"${NETWORK}\" already exists"
    else
        echo "Creating Docker network \"${NETWORK}\""
        docker network create --label ${NETWORK_LABEL} ${NETWORK} > /dev/null
    fi
done

for VOLUME in ${VOLUMES[@]}
do
    if docker volume ls | grep -qE "*\s${VOLUME}\s*"; then
        echo "Docker volume \"${VOLUME}\" already exists"
    else
        echo "Creating Docker volume \"${VOLUME}\""
        docker volume create --label ${VOLUME_LABEL} ${VOLUME} > /dev/null
    fi
done
