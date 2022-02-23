resource "aws_ecs_service" "ecs-ec2-akumotech-akumosolutions" {
  name            = "dev-infra-ue1-terraform-ecs_service-01"
  cluster         = aws_ecs_cluster.ecs-ec2-akumotech.id
  task_definition = aws_ecs_task_definition.task_definition_akumosolutions.arn
  desired_count   = 1
  iam_role        = aws_iam_role.ecs_agent.arn

  network_configuration {
    subnets          = ["subnet-041a82b4a7e278099"]
    assign_public_ip = false
    security_groups  = [aws_security_group.ecs_sg.id]
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.target_group.arn
    container_name   = "akumosolutions-${var.environment}-container"
    container_port   = 3000
  }

}

resource "aws_alb" "application_load_balancer" {
  name               = "akumosolutions-ecs-alb"
  internal           = false
  load_balancer_type = "application"
  subnets            = ["subnet-041a82b4a7e278099", "subnet-0cfb5c7dfd734e87f"]
  security_groups    = [aws_security_group.alb_sg.id]

  tags = {
    Name        = "akumosolutions-ecs-alb-alb"
    Environment = var.environment
  }
}

resource "aws_lb_target_group" "target_group" {
  name        = "akumosolutions-${var.environment}-tg"
  port        = 3000
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = "vpc-0f933cd99d2a48acc"

  health_check {
    path = "/api/health"
    port = "3000"
  }

  tags = {
    Name = "akumosolutions-tg"
    Env  = var.environment
  }
}


resource "aws_lb_listener" "listener" {
  load_balancer_arn = aws_alb.application_load_balancer.id
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.target_group.id
  }
}
