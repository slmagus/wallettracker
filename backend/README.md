# Local Development
podman build -t backend .
podman run -p 8080:8080 --mount type=bind,src=app,dst=/code/app backend