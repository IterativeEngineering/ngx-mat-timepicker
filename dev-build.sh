#!/bin/bash
# This script is used for dev purposes only.
npm run build && cd dist/ngx-mat-timepicker && npm pack
echo 'Build folder:'
echo $(pwd)