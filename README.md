Starting a node-based microservice
===

Start mongo container
```
docker run --name mongo -p 27017:27017 -d mongo
```

Run from Dockerhub (assumes Mongo container is running and container is on local network)
```
docker pull astrobass/node-microservice

docker run --name api --link mongo:mongo -p 8888:8888 -d astrobass/node-microservice
```

Run Watchtower to automatically pull latest Docker image from Dockerhub when it changes
```
docker pull centurylink/watchtower

docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock centurylink/watchtower --cleanup
```

Other options
---

Start api container manually
```
docker build -t api .

docker run --name api --link mongo:mongo -p 8888:8888 -d api
```

Run from Dockerhub (assumes Mongo container is already running and linking via Docker container bridge)
```
docker pull astrobass/node-microservice

docker run --name api --link mongo:mongo -p 8888:8888 -d astrobass/node-microservice
```
