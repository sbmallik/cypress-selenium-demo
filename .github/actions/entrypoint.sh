#!/bin/sh

statusCode=$(curl -w '%{http_code}' -X POST \
  -H 'Content-Type:application/json' \
  -d '{"serverId":"github.com","commitSha":"'$1'"}' \
  "$3/api/externals/github/servers/$4/commit/$1/complete?apiKey=$2")

echo "::set-output name=response::$statusCode"
