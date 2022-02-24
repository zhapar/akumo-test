resource "aws_acm_certificate" "domain_certificate" {
  domain_name       = var.domain_name
  validation_method = "DNS"
}

resource "aws_route53_record" "domain_certificate_validation_record" {
  for_each = {
    for options in aws_acm_certificate.domain_certificate.domain_validation_options : options.domain_name => {
      name   = options.resource_record_name
      record = options.resource_record_value
      type   = options.resource_record_type
    }
  }

  name    = each.value.name
  records = [each.value.record]
  ttl     = 60
  type    = each.value.type
  zone_id = var.hosted_zone_id
}

resource "aws_acm_certificate_validation" "domain_certificate_validation" {
  certificate_arn         = aws_acm_certificate.domain_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.domain_certificate_validation_record : record.fqdn]
}

resource "aws_route53_record" "domain_name" {
  zone_id = var.hosted_zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_alb.application_load_balancer.dns_name
    zone_id                = aws_alb.application_load_balancer.zone_id
    evaluate_target_health = true
  }
}
