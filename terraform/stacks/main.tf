terraform {
  required_version = "1.0.11"
  backend "s3" {
    encrypt        = true
    bucket         = "sharedservices-terraform-backend-akumotechnology"
    dynamodb_table = "sharedservices-terraform-lock01"
    key            = "akumosolutions/dev/akumosolutions-ecs.tfstate"
    region         = "us-east-1"
  }
}

provider "aws" {
  region = var.region
  assume_role {
    role_arn = "arn:aws:iam::140316374689:role/TerraformExecutionRole"
  }
}
