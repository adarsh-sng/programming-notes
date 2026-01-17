`docker run --name test-mongo -dit -p 27017:27017 --rm mongo:4.4.1`
This command will run a MongoDB container named `test-mongo` in detached mode, mapping the container's port 27017 to the host's port 27017. The `--rm` flag ensures that the container is removed automatically when it is stopped. The image used is `mongo:4.4.1`, which specifies version 4.4.1 of MongoDB.
`docker exec -it test-mongo mongo`
`docker kill test-mongo`
