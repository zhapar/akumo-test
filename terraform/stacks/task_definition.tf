data "template_file" "task_definition_template" {
  template = file("akumosolutions_def.json.tpl")
  vars = {
    REPOSITORY_URL = var.ecs_image_url
    ECS_IMAGE_TAG  = var.ecs_image_tag
  }
}

resource "aws_ecs_task_definition" "task_definition_akumosolutions" {
  family                = "akumosolutions"
  container_definitions = data.template_file.task_definition_template.rendered
  network_mode          = "awsvpc"
  memory                = "512"
  cpu                   = "512"
}
