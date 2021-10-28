#!/usr/bin/env bash

[ "$WATCH" ] &&
  SCRIPT="npm run test:watch"  ||
  SCRIPT="npm run test"

COMMAND=$SCRIPT docker-compose -f docker-compose.yml -f docker-compose.test.yml up

