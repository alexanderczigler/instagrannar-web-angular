#!/bin/sh
docker build -t instagrannar-web .
docker tag -f instagrannar-web instagrannar/web
docker push instagrannar/web
