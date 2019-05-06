#!/bin/bash

NETWORKS=(
   "public_proxy"
)

VOLUMES=(
	"jenkins"
)

NETWORK_LABEL="com.teoworks.type=network"
VOLUME_LABEL="com.teoworks.type=volume"

for NETWORK in ${NETWORKS}
do
   docker network create --label ${NETWORK_LABEL} ${NETWORK}
done

for VOLUME in ${VOLUMES}
do
   docker volume create --label ${VOLUME_LABEL} ${VOLUME}
done
