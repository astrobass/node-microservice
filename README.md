Starting a node-based microservice
===

Start mongo container
---
docker run --name mongo -d mongo

Start api container
---
docker build -t api .
docker run api
