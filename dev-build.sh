#!/bin/bash
npm run build && cd dist/ngx-mat-timepicker && npm pack
echo 'Build folder:'
echo $(pwd)
