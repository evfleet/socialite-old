###########################################
FROM node:16.13-alpine as base

WORKDIR /app/api

COPY package*.json ./

RUN npm install 

COPY . . 

###########################################
FROM base as test-watch

ENV GIT_WORK_TREE=/app/api GIT_DIR=/app/.git

RUN apk update && \
    apk add git