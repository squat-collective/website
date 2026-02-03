terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    # Configure in environments/*/backend.tfvars
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "le-squat"
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project     = "le-squat"
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}
