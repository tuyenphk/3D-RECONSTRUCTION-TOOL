## 3D-RECONSTRUCTION-TOOL

# Project Overview
3D-Reconstruction Tool is a fun, enjoyable, and informative web application designed for experimentation, research, and casual learning. 
The application's cloud-hosted neural network offers symmetry detection services for 2-dimensional astronomy images, and reproduces them in a 3-dimensional format.
Cloud-based machine learning has rapidly evolved into a vital and sophisticated aspect of modern software development. The goal of the 3D Reconstruction Tool aims to explore and transform these components into an entertaining, informative platform.

# Release Note(s)

v1.0: 
https://github.com/tuyenphk/3D-RECONSTRUCTION-TOOL/releases/tag/v1.0
- Web Application instantiated with Nodejs, serviced on Google Compute Engine
- Client-side image upload and viewability
- File navigation for local images. Images can also be uploaded directly to the Google Cloud via POSTMAN, but this feature is currently unavailable from the website for this release. 
- a pixel2Mesh output.obj file
- Server & image bucket instantiated on Google Compute Engine
- Sample 3D Model, housed in MODELING tab, with zoom in/out features and 360 viewing capability

# Install instruction
To enjoy our application, follow those steps below:

<strong>Client-side</Strong>
1. clone the project into your local machine: git clone https://github.com/tuyenphk/3D-RECONSTRUCTION-TOOL.git
2. change the directory to client: <strong>cd client</strong>
3. install dependencies: <strong>npm install</strong> (Make sure install all dependencies in the package.json)
4. run the react application: <strong>npm start</strong>

<strong>Server-side</Strong>
1. change the directory to the backend folder: <strong>cd server</strong>
2. install dependencie: <strong>npm install --save multer express cors body-parser @google-cloud/storage</strong>
3. run the backend server: <strong>node index.js<strong>

# How to Use/Test This Release

You have two options to run this release:

1. Dowload the github package and then in the client folder, you may start the web application by typing into the console: <strong>npm start</strong>. It will pop up the react web application in your browser and you can test our application.
1. Go to this link http://34.105.28.90:8888/ 

The website has several points of navigation: <strong>HOME, ABOUT, MODELING, RESOURCES, and TEAM.</strong>

In the <strong>HOME</strong> tab, you may view the front page.

In the <strong>ABOUT</strong> tab, you may see our project description.

In the <strong>MODELING</strong> tab, you may view a sample rendered 3D model, as well as click to navigate your local directory for images to upload.
Upload functionality is midway in development, so this button is primarily used for file navigation only.

<strong>RESOURCES and TEAM</strong> are to contain miscellaneous information about the components of the project and its members.

# Link to Source Code

<strong>https://github.com/tuyenphk/3D-RECONSTRUCTION-TOOL</strong>
