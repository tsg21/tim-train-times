#!/bin/bash
npm-bundle
file='train-times-js-1.0.0'
mkdir tmp
rm -f $file.zip
tar -C tmp -zxf $file.tgz
cd tmp/package
zip -r ../../$file.zip .
cd ../..
rm -r tmp
