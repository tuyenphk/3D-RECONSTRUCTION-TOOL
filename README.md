## 3D-RECONSTRUCTION-TOOL

# Project Overview
3D-Reconstruction Tool is a fun, enjoyable, and informative web application designed for experimentation, research, and casual learning. 
The application's cloud-hosted neural network offers symmetry detection services for 2-dimensional astronomy images, and reproduces them in a 3-dimensional format.
Cloud-based machine learning has rapidly evolved into a vital and sophisticated aspect of modern software development. The goal of the 3D Reconstruction Tool aims to explore and transform these components into an entertaining, informative platform.

# Release Note

v0.1: 
- Web Application instantiated with Nodejs, serviced on Google Compute Engine
- Client-side image upload and viewability
- File navigation for local images
- Able to directly upload images to Google Cloud using POSTMAN. Ongoing internal server issues prevent images from being updated by the website for this release.
- Server & image bucket instantiated on Google Compute Engine
- a sample 3D model (housed in the MODELING tab) with ability to zoom in/out and navigate at 360 degrees

# Install instruction
To enjoy our application, follow those steps below:

<strong>Client-side</Strong>
1. clone the project into your local machine: git clone https://github.com/tuyenphk/3D-RECONSTRUCTION-TOOL.git
2. change the directory to client: cd client
3. install dependencies: npm install (Make sure install all dependencies in the package.json)
4. run the react application: npm start

<strong>Server-side</Strong>
1. cd server
2. install dependencies: npm install --save multer express cors body-parser @google-cloud/storage
3. node index.js

# How to Use/Test This Release

In the <strong>client</strong> folder, you may start the web application by typing into the console:
<strong>npm start</strong>
and proceed to http://34.105.28.90:8888/ once it is running. 

The site has several points of navigation: 
<strong>HOME, ABOUT, MODELING, RESOURCES, and TEAM.</strong>

In the <strong>ABOUT</strong> tab, you may view the front page.

In the <strong>MODELING</strong> tab, you may view a sample rendered 3D model, as well as click to navigate your local directory for images to upload.
Upload functionality is midway in development, so this button is primarily used for file navigation only.

<strong>RESOURCES and TEAM</strong> are to contain miscellaneous information about the components of the project and its members.


# Link to Source Code

<strong>https://github.com/tuyenphk/3D-RECONSTRUCTION-TOOL</strong>
