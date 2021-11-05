#!/usr/bin/env bash

if [ "$WATCH" ]
then
  docker-compose -f docker-compose.yml -f docker-compose.test.yml up database_test api_e2e_watch
else
  docker-compose -f docker-compose.yml -f docker-compose.test.yml up database_test api_e2e
fi