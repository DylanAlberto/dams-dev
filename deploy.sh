bucket="dams-dev.com"
profile="mio-buss-dev"
distribution="E2TNYFIIN5Z4LN"

yarn build
aws s3 rm --recursive s3://$bucket --profile=$profile

aws s3 sync dist s3://$bucket \
  --acl public-read \
  --profile $profile

aws cloudfront create-invalidation \
  --distribution-id $distribution \
  --paths "/*" \
  --profile $profile