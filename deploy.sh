bucket="dams-dev.com"
profile="mio-buss-dev"
yarn build
aws s3 rm --recursive s3://$bucket --profile=$profile
aws s3 sync dist s3://$bucket \
  --acl public-read \
  --profile $profile