#!/bin/bash

# Sript to insstall all dependencies

killall node
sudo rm -rf node_modules
npm cache clean --force

sudo npm install -g npm@latest
sudo npm i core-util-is --save

sudo npm install 
sudo npm i react-router-dom --save
sudo npm install --save react-router
sudo npm install axios --save
sudo npm install react-hooks --save
sudo npm install react-router-hash-link --save
sudo npm install react-bootstrap --save
sudo npm install mdbreact --save
sudo npm install typescript --save
sudo npm install three --save
sudo npm install three-obj-mtl-loader --save
sudo npm install three-orbit-controls --save
sudo npm install d3 --save
sudo npm install --save react-toastify
