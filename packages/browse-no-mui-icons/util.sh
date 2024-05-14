#!/bin/bash

export NL=$'\n'

# when invoked directly on mac terminal, BASH_SOURCE work because by default it's zsh
export SCRIPT_FILE_REL_PATH="${BASH_SOURCE[0]}"
if [[ "$SCRIPT_FILE_REL_PATH" == "" ]]; then
  SCRIPT_FILE_REL_PATH="${(%):-%N}"
fi

export SCRIPT_FILE_PATH="`realpath $SCRIPT_FILE_REL_PATH`"
export SCRIPT_DIR="`dirname $SCRIPT_FILE_PATH`"

export WORKSPACE_DIR=`realpath "$SCRIPT_DIR"`
export DIST_DIR="$WORKSPACE_DIR/dist"
export AWS_CLOUDFRONT_DISTRIBUTION=E24329D0OYO9JZ
export AWS_REGION=us-east-2
export AWS_S3_SITE_BUCKET=s3://no-mui-icons-site

aws configure set default-region $AWS_REGION

big_error() {
  ts_echo
  ts_echo "*"
  ts_echo "* $1"
  ts_echo "*"
  ts_echo
}

ts_echo() {
  MINUTES_ELAPSED=$((SECONDS / 60))
  SECONDS_ONLY_ELAPSED=$((SECONDS % 60))
  TEXT="$@" # resolves parsing error when more than one arg
  printf "%02d:%02d SAM> $TEXT\n" $MINUTES_ELAPSED $SECONDS_ONLY_ELAPSED
}

