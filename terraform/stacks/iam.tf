data "aws_iam_policy_document" "ecs_agent" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ecs_agent" {
  name               = "ecs-agent-role"
  assume_role_policy = data.aws_iam_policy_document.ecs_agent.json
}


resource "aws_iam_role_policy_attachment" "ecs_agent_attachment" {
  role       = aws_iam_role.ecs_agent.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role"
}

resource "aws_iam_policy" "ecs_cross_account_assume_role" {
  name = "ecs_crocc_account_assume_role"
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Sid" : "VisualEditor0",
          "Effect" : "Allow",
          "Action" : "sts:*",
          "Resource" : "arn:aws:iam::100209986082:role/ECRPullImageCrossAccountRole"
        }
      ]
    }
  )
}

resource "aws_iam_role_policy_attachment" "ecs_cross_account_assume_role_attachment" {
  role       = aws_iam_role.ecs_agent.name
  policy_arn = aws_iam_policy.ecs_cross_account_assume_role.arn
}

resource "aws_iam_instance_profile" "ecs_agent" {
  name = "ecs-agent-profile"
  role = aws_iam_role.ecs_agent.name
}
