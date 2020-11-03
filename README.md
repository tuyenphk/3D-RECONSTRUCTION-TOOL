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

v2.0:
- 

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
4. If you want to create the bucket on Google Cloud Storage, remember to dowload the json key file in APIs & Services/Credentials into the server/config folder. Also make change the bucket name in helpers/helpers.js, the project id and serviceKey in config/index.js

# How to Use this Release

You have two options to run this release:

1. Dowload the github package and then in the client folder, install dependencies by <strong>npm install</strong> and you may start the web application by typing into the console: <strong>npm start</strong>. It will pop up the react web application in your browser and you can test our application.

2. Go to this link http://34.105.28.90:8888/ to test our application.

# Usage of this Release

In the <strong>MODELING</strong> tab, you have 2 options to choose:

1. <strong>GO UPLOAD</strong>: 
- you can upload 2D image
- Accepted only image file (.png, .jpg, .jpeg) 
- 2D image will be displayed here.
- Image will be stored into Google Cloud bucket.
- Check on your website console.
  
2. <strong>GO SEARCH</strong>: 
- Our database has 8 images 
- You can enter the name of 2D images on the search bar to search
- Choose any 2D image here to see the 3D model displayed on the right side
- The zoom function for 3D model is midway on the development, so zooming 3D model now does not look well for this release.




