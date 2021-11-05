#!/usr/bin/env bash

if [ "$WATCH" ]
then
  docker-compose -f docker-compose.yml -f docker-compose.test.yml up api_unit_watch
else
  docker-compose -f docker-compose.yml -f docker-compose.test.yml up api_unit
fi