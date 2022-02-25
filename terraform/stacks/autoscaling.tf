resource "aws_launch_configuration" "ecs_launch_config" {
  name                 = var.ecs_lg_name
  image_id             = var.ecs_lg_ami
  iam_instance_profile = aws_iam_instance_profile.ecs_agent.name
  security_groups      = [aws_security_group.ecs_sg.id]
  user_data            = "#!/bin/bash\necho ECS_CLUSTER=dev-infra-ue1-terraform-ecs-01 >> /etc/ecs/ecs.config"
  instance_type        = var.ecs_lg_instType
  key_name             = var.ecs_lg_key_name
}

resource "aws_autoscaling_group" "failure_analysis_ecs_asg" {
  name                 = var.ag_name
  vpc_zone_identifier  = var.ag_vpc_identifier
  launch_configuration = aws_launch_configuration.ecs_launch_config.name

  desired_capacity          = var.ag_desired_capacity
  min_size                  = var.ag_min_size
  max_size                  = var.ag_max_size
  health_check_grace_period = 300
  health_check_type         = "EC2"
}
