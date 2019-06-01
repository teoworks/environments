FROM node:10-slim

COPY ./resources/dashboard /usr/local/src/dashboard
COPY ./resources/entrypoint.sh /entrypoint.sh

EXPOSE 9000 9092

ENTRYPOINT ["/entrypoint.sh"]
