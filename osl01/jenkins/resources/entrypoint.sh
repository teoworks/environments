#!/bin/bash

set -e

PACKAGES=(
    "apt-transport-https"
    "software-properties-common"
    "gnupg2"
)

echo "### Updating packages... ###"
apt-get update

for PACKAGE in ${PACKAGES[@]}
do
    INSTALLED=$(dpkg -l | grep -c -e "\s${PACKAGE}\s" || true)
    if [ ${INSTALLED} -gt 0 ]; then
        echo "### Package ${PACKAGE} already installed, skipping ###"
    else
        echo "### Installing package ${PACKAGE}... ###"
        apt-get -y install "${PACKAGE}"
    fi
done

APT_LIST="/etc/apt/sources.list.d/docker.list"
if [ ! -f ${APT_LIST} ]; then
    echo "### Adding APT key... ###"
    curl -fsSL "https://download.docker.com/linux/debian/gpg" | apt-key add -

    echo "### Adding APT repo to ${APT_LIST}... ###"
    echo "deb [arch=amd64] https://download.docker.com/linux/debian stretch stable" | tee ${APT_LIST}

    echo "### Updating packages... ###"
    apt-get update

    PACKAGE=docker-ce
    echo "### Installing package ${PACKAGE}... ###"
    apt-get -y install "${PACKAGE}"

    adduser jenkins docker
fi

APT_LIST="/etc/apt/sources.list.d/node.list"
if [ ! -f ${APT_LIST} ]; then
    echo "### Adding APT repo to ${APT_LIST}... ###"
    echo "deb https://deb.nodesource.com/node_10.x stretch main" | tee ${APT_LIST}
    echo "deb-src https://deb.nodesource.com/node_10.x stretch main" | tee ${APT_LIST}

    echo "### Updating packages... ###"
    apt-get update

    PACKAGE=nodejs
    echo "### Installing package ${PACKAGE}... ###"
    apt-get -y install "${PACKAGE}"
fi

APT_LIST="/etc/apt/sources.list.d/yarn.list"
if [ ! -f ${APT_LIST} ]; then
    echo "### Adding APT key... ###"
    curl -fsSL "https://dl.yarnpkg.com/debian/pubkey.gpg" | apt-key add -

    echo "### Adding APT repo to ${APT_LIST}... ###"
    echo "deb https://dl.yarnpkg.com/debian stable main" | tee ${APT_LIST}

    echo "### Updating packages... ###"
    apt-get update

    PACKAGE=yarn
    echo "### Installing package ${PACKAGE}... ###"
    apt-get -y install "${PACKAGE}"
fi

cd /
su jenkins
/sbin/tini -- /usr/local/bin/jenkins.sh
