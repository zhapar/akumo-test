terraform {
  required_version = "1.0.11"
  backend "s3" {
    encrypt        = true
    bucket         = "sharedservices-terraform-backend-akumotechnology"
    dynamodb_table = "sharedservices-terraform-lock01"
    key            = "akumosolutions/dev/akumosolutions-ecr.tfstate"
    region         = "us-east-1"
  }
}

provider "aws" {
  region = "us-east-1"
  # assume_role {
  #   role_arn = "arn:aws:iam::100209986082:role/TerraformExecutionRole"
  # }
}
