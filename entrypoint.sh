#!/bin/sh -l

sh -c "echo The default branch to deploy is set to $INPUT_BRANCH_TO_DEPLOY"

set -e

if [[ -z "$PROJECT_CSPROJ_FILE_PATH" ]]; then
	echo "Set the PROJECT_CSPROJ_FILE_PATH env variable." ;
	exit 1 ;
fi


if [[ -z "$PROJECT_DIRECTORY_PATH" ]]; then
	echo "Set the PROJECT_DIRECTORY_PATH env variable." ;
	exit 1 ;
fi