data "template_file" "task_definition_template" {
  template = file("akumosolutions_def.json.tpl")
  vars = {
    NAME           = var.container_def_name
    REPOSITORY_URL = var.ecs_image_url
    ECS_IMAGE_TAG  = var.ecs_image_tag
    # CONTAINER_PORT = var.container_port
    # HOST_PORT      = var.host_port
    # CPU            = var.cpu
    # MEMORY         = var.memory
  }
}

resource "aws_ecs_task_definition" "task_definition_akumosolutions" {
  family                = var.task_def_family
  container_definitions = data.template_file.task_definition_template.rendered
  network_mode          = "awsvpc"
  memory                = var.task_def_memory
  cpu                   = var.task_def_cpu
}
