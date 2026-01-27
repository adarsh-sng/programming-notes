| Goal               | Normal Docker Command (Manual)                     | Docker Compose Command (Automatic)      |
| ------------------ | -------------------------------------------------- | --------------------------------------- |
| Build your app     | `docker build -t my-app .`                         | `docker compose build`                  |
| Start everything   | `docker run -d my-app`<br>`docker run -d postgres` | `docker compose up -d`                  |
| Stop everything    | `docker stop <id1> <id2>`                          | `docker compose down`                   |
| Check logs         | `docker logs <id>`                                 | `docker compose logs`                   |
| Login to container | `docker exec -it <id> sh`                          | `docker compose exec <service_name> sh` |

## Docker Run Behavior

| Command                         | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| `docker run my-image`           | Runs the default CMD (Start Server).            |
| `docker run my-image <command>` | Replaces the default CMD with your `<command>`. |

## `docker compose up` vs `docker compose run`

| Feature        | `docker compose up`                       | `docker compose run <service>`               |
| -------------- | ----------------------------------------- | -------------------------------------------- |
| Purpose        | Run the actual application.               | Run a helper script / tool.                  |
| Ports          | Opens ports (e.g., localhost:3000 works). | Closed ports (localhost:3000 fails).         |
| Quantity       | Starts all services defined in YAML.      | Starts only the one you asked for (+ deps).  |
| Cleanup        | Ctrl+C stops the app.                     | exit stops the specific container.           |
| Container Name | `project-worker-1` (Predictable)          | `project-worker-run-83h2` (Random/Ephemeral) |

docker compose up starts the service (the main server).

docker compose exec goes into it (the running server).

docker compose run starts a SEPARATE, NEW copy of the service (usually for a task).


# The -v flag is CRITICAL. It removes the 'volumes' where data is stored.
`docker-compose down -v`