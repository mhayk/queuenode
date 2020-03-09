## Redis

Enter the following command to create a redis container from the docker image 'redis:alpine'.
```
$ docker run --name redis -p 6379:6379 -d -t redis:alpine
```
If you already have a docker container named "redis", you just need to start it:
```
$ docker start redis
```