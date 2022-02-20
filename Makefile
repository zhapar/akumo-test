SHELL := /bin/bash

## DOCKER (ECR)

  ## BUILD
ecr-build:
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 140316374689.dkr.ecr.us-east-1.amazonaws.com
	$(eval IMAGE_TAG := "$(shell git rev-parse HEAD)")
	$(eval IMAGE_URL := "140316374689.dkr.ecr.us-east-1.amazonaws.com/akumosolutions")
	docker build -t $(IMAGE_URL):$(IMAGE_TAG) .
	docker push $(IMAGE_URL):$(IMAGE_TAG)

#   ## PUSH
# ecr-deploy:
# 	$(eval IMAGE_TAG := "$(shell git rev-parse HEAD)")
# 	$(eval IMAGE_URL := "140316374689.dkr.ecr.us-east-1.amazonaws.com/akumosolutions")
# 	docker build -t $(IMAGE_URL):$(IMAGE_TAG)
# 	docker push $(IMAGE_URL):$(IMAGE_TAG)


## TF APPLY 

  ## DEV
plan-dev:
	$(eval ECR_IMAGE_VERSION := "$(shell git rev-parse HEAD)")
	cd terraform/stacks; tfswitch; terraform init
	cd terraform/stacks; tfswitch; terraform plan -var='ecs_image_tag'=$(ECR_IMAGE_VERSION) -var-file='dev.tfvars'

apply-dev:
	$(eval ECR_IMAGE_VERSION := "$(shell git rev-parse HEAD)")
	cd terraform/stacks; tfswitch; terraform init
	cd terraform/stacks; tfswitch; terraform apply -var='ecs_image_tag'=$(ECR_IMAGE_VERSION) -var-file='dev.tfvars' -auto-approve

  ## PROD
plan-prod:
	$(eval ECR_IMAGE_VERSION := "$(shell git rev-parse HEAD)")
	cd terraform/stacks; tfswitch; terraform init
	cd terraform/stacks; tfswitch; terraform plan -var='ecs_image_tag'=$(ECR_IMAGE_VERSION) -var-file='env/prod.tfvars'


apply-prod:
	$(eval ECR_IMAGE_VERSION := "$(shell git rev-parse HEAD)")
	cd terraform/stacks; tfswitch; terraform init
	cd terraform/stacks; tfswitch; terraform apply -var='ecs_image_tag'=$(ECR_IMAGE_VERSION) -var-file='env/prod.tfvars' -auto-approve