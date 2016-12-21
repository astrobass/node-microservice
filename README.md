Starting a node-based microservice
===

Start mongo container
```
docker run --name mongo -p 27017:27017 -d mongo
```

Start api container
```
docker build -t api .

docker run --name api --link mongo:mongo -p 8888:8888 -d api
```

Run from Dockerhub
```
docker pull astrobass/node-microservice

docker run --name api --link mongo:mongo -p 8888:8888 -d astrobass/node-microservice
```
