#!/bin/bash

# Sript to insstall all dependencies

killall node
sudo rm -rf node_modules
npm cache clean --force



npm install 
npm i react-router-dom
npm install --save react-router
npm install axios
npm install typescript
npm install three
npm install three-obj-mtl-loader
npm install three-orbit-controls
npm install --save react-toastify
