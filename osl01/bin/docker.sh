#!/bin/bash

ACTION=$1

set -e

NETWORKS=(
    "ldap"
    "haproxy"
    "docker"
    "postgres"
    "oracle-xe"
    "jenkins"
    "nexus"
   	"kafka"
    "keycloak"
)

VOLUMES=(
    "ldap"
    "haproxy"
    "docker"
    "postgres"
    "oracle-xe"
    "jenkins"
    "nexus"
    "portainer"
    "kafka"
)

NETWORK_LABEL="com.teoworks.type=network"
VOLUME_LABEL="com.teoworks.type=volume"


function init() {
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
}

function purge() {
    for NETWORK in ${NETWORKS[@]}
    do
        if docker network ls | grep -qE "*\s${NETWORK}\s*"; then
            echo "Removing Docker network \"${NETWORK}\""
            docker network rm ${NETWORK} > /dev/null
        else
            echo "Docker network \"${NETWORK}\" does not exists"
        fi
    done

    for VOLUME in ${VOLUMES[@]}
    do
        if docker volume ls | grep -qE "*\s${VOLUME}\s*"; then
            echo "Removing Docker volume \"${VOLUME}\""
            docker volume rm ${VOLUME} > /dev/null
        else
            echo "Docker volume \"${VOLUME}\" does not exists"
        fi
    done
}

function none() {
    echo "Usage: $0 init|purge"
}


if [ "${ACTION}" = "purge" ]; then
    purge
elif [ "${ACTION}" = "init" ]; then
    init
else
    none
fi
