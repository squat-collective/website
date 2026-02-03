bucket         = "le-squat-terraform-state"
key            = "dev/terraform.tfstate"
region         = "eu-west-1"
encrypt        = true
dynamodb_table = "le-squat-terraform-locks"
