resource "aws_launch_configuration" "ecs_launch_config" {
  name                 = "ecs_launch_config"
  image_id             = "ami-0a5e7c9183d1cea27"
  iam_instance_profile = aws_iam_instance_profile.ecs_agent.name
  security_groups      = ["${aws_security_group.ecs_sg.id}"]
  user_data            = "#!/bin/bash\necho ECS_CLUSTER=dev-infra-ue1-terraform-ecs-01 >> /etc/ecs/ecs.config"
  instance_type        = "t2.micro"
  key_name             = "abdul_key"
}

resource "aws_autoscaling_group" "failure_analysis_ecs_asg" {
  name                 = "asg"
  vpc_zone_identifier  = ["subnet-041a82b4a7e278099"]
  launch_configuration = aws_launch_configuration.ecs_launch_config.name

  desired_capacity          = 1
  min_size                  = 1
  max_size                  = 2
  health_check_grace_period = 300
  health_check_type         = "EC2"
}
