#!/usr/bin/env bash

if [ "$WATCH" ]
then
  docker-compose -f docker-compose.yml -f docker-compose.test.yml up database test-watch
else
  docker-compose -f docker-compose.yml -f docker-compose.test.yml up database test
fi