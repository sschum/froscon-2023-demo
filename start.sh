#!/bin/sh

SCRIPT_PATH=$(realpath "$0")
SCRIPT_HOME=$(dirname "$SCRIPT_PATH")

CONTAINER_NAME=froscon-2023-demo

docker rm -f ${CONTAINER_NAME} > /dev/null 2>&1
docker run -d --name ${CONTAINER_NAME} -v ${SCRIPT_HOME}/src:/usr/share/nginx/html/ -p 1312:80 nginx:alpine > /dev/null

read -rsp $'Open your browser: http://localhost:1312\nPress any key to shutdown the application!\n' -n1 key

docker rm -f ${CONTAINER_NAME} > /dev/null