SHELL := /bin/bash

## DOCKER (ECR)

ecr-apply-dev:
	cd terraform/shared; tfswitch; terraform init
	cd terraform/shared; tfswitch; terraform validate
	cd terraform/shared; tfswitch; terraform plan -var-file='dev.tfvars'
	cd terraform/shared; tfswitch; terraform apply -var-file='dev.tfvars' -auto-approve

ecr-apply-prod:
	cd terraform/shared; tfswitch; terraform init
	cd terraform/shared; tfswitch; terraform validate
	cd terraform/stacks; tfswitch; terraform plan -var-file='prod.tfvars'
	cd terraform/stacks; tfswitch; terraform apply -var-file='prod.tfvars' -auto-approve

  ## BUILD
ecr-build:
	aws ecr get-login-password --region us-east-1 | sudo docker login --username AWS --password-stdin 140316374689.dkr.ecr.us-east-1.amazonaws.com
	$(eval IMAGE_TAG := "$(shell git rev-parse HEAD)")
	$(eval IMAGE_URL := "140316374689.dkr.ecr.us-east-1.amazonaws.com/akumosolutions")
	sudo docker build -t $(IMAGE_URL):$(IMAGE_TAG) .
	sudo docker push $(IMAGE_URL):$(IMAGE_TAG)

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