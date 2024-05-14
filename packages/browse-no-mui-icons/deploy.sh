#!/bin/bash
set -e

source "$(dirname "$0")/util.sh"

ts_echo Building website

npm run build

ts_echo Syncing S3
aws s3 sync $DIST_DIR $AWS_S3_SITE_BUCKET

ts_echo Invalidating website
INVALIDATION_RESPONSE=`aws cloudfront create-invalidation --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION --paths '/*' --output yaml`
INVALIDATION_ID=`echo "$INVALIDATION_RESPONSE" | yq e '.Invalidation.Id'`
aws cloudfront wait invalidation-completed --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION --id $INVALIDATION_ID

ts_echo DEPLOY COMPLETE
