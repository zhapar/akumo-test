[
  {
    "name": "akumosolutions-dev-container",
    "image": "${REPOSITORY_URL}:${ECS_IMAGE_TAG}",
    "entryPoint": [],
    "environment": [],
    "essential": true,
    "portMappings": [
      {
        "containerPort": 3000,
        "hostPort": 3000
      }
    ],
    "cpu": 256,
    "memory": 256,
    "networkMode": "awsvpc"
  }
]
