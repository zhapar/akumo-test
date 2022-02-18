resource "aws_ecr_repository" "akumo-ecr" {
  name                 = "akumosolutions"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }
}

#  terraform {
#    backend "s3" {
#     encrypt        = true
#     bucket         = "sharedservices-terraform-backend-akumotechnology"
#     dynamodb_table = "sharedservices-terraform-lock01"
#     key            = "akumosolutions/dev/akumosolutions-ecr.tfstate"
#     region         = "us-east-1"
#   }
# }

provider "aws" {
  region = var.region
  #  assume_role {
  #    role_arn = "arn:aws:iam::140316374689:role/TerraformExecutionRole"
  #  }
}
