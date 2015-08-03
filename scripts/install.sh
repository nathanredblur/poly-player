#!/bin/bash

set -o errexit # Exit on error

cd node_modules/wcjs-player/node_modules/wcjs-renderer/node_modules/webchimera.js
export npm_config_wcjs_runtime="electron"
export npm_config_wcjs_runtime_version="0.30.2"
npm install
cd build/Release
curl -OL  https://github.com/RSATom/WebChimera.js/releases/download/v.0.1.3/libvlc_2.2.1_mac.zip
unzip libvlc_2.2.1_mac.zip
rm libvlc_2.2.1_mac.zip
