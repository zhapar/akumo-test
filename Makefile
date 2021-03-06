SHELL := /bin/bash

## DOCKER (ECR)
ecr-apply-shared:
	cd terraform/shared; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform init
	cd terraform/shared; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform validate
	cd terraform/shared; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform plan -var-file='akumosolutions.tfvars'
	cd terraform/shared; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform apply -var-file='akumosolutions.tfvars' -auto-approve

  ## BUILD
ecr-build:
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 100209986082.dkr.ecr.us-east-1.amazonaws.com
	$(eval IMAGE_TAG := "$(shell git rev-parse HEAD)")
	$(eval IMAGE_URL := "100209986082.dkr.ecr.us-east-1.amazonaws.com/akumosolutions")
	sudo docker build -t $(IMAGE_URL):$(IMAGE_TAG) .
	sudo docker push $(IMAGE_URL):$(IMAGE_TAG)

tag-dev:
	$(eval COMMIT := $(shell git rev-parse --short HEAD))
	$(eval DATE := $(shell git log -1 --format=%cd --date=format:"%Y%m%d"))
	git tag $(DATE)

#   ## PUSH
# ecr-deploy:
# 	$(eval IMAGE_TAG := "$(shell git rev-parse HEAD)")
# 	$(eval IMAGE_URL := "140316374689.dkr.ecr.us-east-1.amazonaws.com/akumosolutions")
# 	docker build -t $(IMAGE_URL):$(IMAGE_TAG)
# 	docker push $(IMAGE_URL):$(IMAGE_TAG)

## TF APPLY 

  ## DEV-PLAY-APP
deploy-app-dev:
	$(eval ECR_IMAGE_VERSION := "$(shell git rev-parse HEAD)")
	cd terraform/stacks; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform init
	cd terraform/stacks; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform plan -target="aws_ecs_task_definition.task_definition_akumosolutions" -var='ecs_image_tag'=$(ECR_IMAGE_VERSION) -var-file='dev.tfvars'

  ## DEV
plan-dev:
	$(eval ECR_IMAGE_VERSION := "$(shell git rev-parse HEAD)")
	cd terraform/stacks; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform init
	cd terraform/stacks; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform plan -var='ecs_image_tag'=$(ECR_IMAGE_VERSION) -var-file='dev.tfvars'

apply-dev:
	$(eval ECR_IMAGE_VERSION := "$(shell git rev-parse HEAD)")
	cd terraform/stacks; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform init
	cd terraform/stacks; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform apply -var='ecs_image_tag'=$(ECR_IMAGE_VERSION) -var-file='dev.tfvars' -auto-approve

  ## PROD
plan-prod:
	$(eval ECR_IMAGE_VERSION := "$(shell git rev-parse HEAD)")
	cd terraform/stacks; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform init
	cd terraform/stacks; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform plan -var='ecs_image_tag'=$(ECR_IMAGE_VERSION) -var-file='env/prod.tfvars'


apply-prod:
	$(eval ECR_IMAGE_VERSION := "$(shell git rev-parse HEAD)")
	cd terraform/stacks; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform init
	cd terraform/stacks; tfswitch; sudo cp ~/bin/terraform /usr/local/bin/terraform; terraform apply -var='ecs_image_tag'=$(ECR_IMAGE_VERSION) -var-file='env/prod.tfvars' -auto-approve