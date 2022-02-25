## CONTAINER DEFINITION VARS
container_def_name = "akumosolutions-dev-container"
ecs_image_url      = "100209986082.dkr.ecr.us-east-1.amazonaws.com/akumosolutions"
# container_port     = 3000
# host_port          = 3000
# cpu                = 256
# memory             = 256


## TASK DEFINITION VARS
task_def_family = "akumosolutions"
task_def_memory = 512
task_def_cpu    = 512

## Launch Configuration (lg)
ecs_lg_name     = "ecs_launch_config"
ecs_lg_ami      = "ami-0a5e7c9183d1cea27"
ecs_lg_instType = "t2.micro"
ecs_lg_key_name = "abdul_key"

## AUTOSCALING (ag)
ag_name             = "akumosolutions-ecs-asg"
ag_vpc_identifier   = ["subnet-041a82b4a7e278099"]
ag_desired_capacity = 1
ag_min_size         = 1
ag_max_size         = 2


## ROUTE_53
domain_name    = "dev.akumosolutions.io"
hosted_zone_id = "Z0194109MAY7X2KANL5N"
