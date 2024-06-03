#!/bin/bash

cd "/System/Volumes/Data/Users/mareknocon/Library/Application Support/Firefox/Profiles/z0x8256h.default-release/extensions/"
mv leechblockng@proginosko.com.xpi archive.zip
rm -rf archive
unzip archive.zip -d archive
cd archive
cp /Users/mareknocon/bin/scripts/leechblock/delay/* .
cd ..
zip -r archive.zip archive
mv archive.zip leechblockng@proginosko.com.xpi
