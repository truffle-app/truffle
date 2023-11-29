#!/bin/sh
docker system prune -f
docker image prune -a -f
docker volume prune -a -f
