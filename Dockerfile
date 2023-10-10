FROM node:16.18.0-alpine

RUN chmod 777 .

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app