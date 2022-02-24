## PROVIDER 
variable "region" { default = "us-east-1" }

## CONTAINER DEFINITION VARS
variable "container_def_name" {}
variable "ecs_image_url" {}
variable "ecs_image_tag" { default = "latest" }
# variable "container_port" {}
# variable "host_port" {}
# variable "cpu" {}
# variable "memory" {}
variable "environment" { default = "dev" }

## TASK DEFINITION VARS
variable "task_def_family" {}
variable "task_def_memory" {}
variable "task_def_cpu" {}


## Launch Configuration (lg)
variable "ecs_lg_name" {}
variable "ecs_lg_ami" {}
variable "ecs_lg_instType" {}
variable "ecs_lg_key_name" {}

## AUTOSCALING (ag)
variable "ag_name" {}
variable "ag_vpc_identifier" {}
variable "ag_desired_capacity" {}
variable "ag_min_size" {}
variable "ag_max_size" {}
