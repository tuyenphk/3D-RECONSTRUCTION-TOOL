## 3D-RECONSTRUCTION-TOOL

# Project Overview
3D-Reconstruction Tool is a fun, enjoyable, and informative web application designed for experimentation, research, and casual learning. 
The application's cloud-hosted neural network offers symmetry detection services for 2-dimensional astronomy images, and reproduces them in a 3-dimensional format.
Cloud-based machine learning has rapidly evolved into a vital and sophisticated aspect of modern software development. The goal of the 3D Reconstruction Tool aims to explore and transform these components into an entertaining, informative platform.

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
3. run the backend server: <strong>node index.js</strong>
4. If you want to create the bucket on Google Cloud Storage, remember to dowload the json key file in APIs & Services/Credentials into the server/config folder. Also make change the bucket name in helpers/helpers.js, the project id and serviceKey in config/index.js

# Release Note(s)

v1.0: https://github.com/tuyenphk/3D-RECONSTRUCTION-TOOL/releases/tag/v1.0
- Web Application instantiated with Nodejs, serviced on Google Compute Engine
- Client-side image upload and viewability
- File navigation for local images. Images can also be uploaded directly to the Google Cloud via POSTMAN, but this feature is currently unavailable from the website for this release. 
- a pixel2Mesh output.obj file
- Server & image bucket instantiated on Google Compute Engine
- Sample 3D Model, housed in MODELING tab, with zoom in/out features and 360 viewing capability

v2.0: https://github.com/tuyenphk/3D-RECONSTRUCTION-TOOL/releases/tag/v2.0

Added features to interactivity: 

- Upload functionality & display to google cloud storage
- Image viewing/rendering
- Utilize the 'search' function to find images
- Ability to search, obtain and display their rendered images

v3.0: https://github.com/tuyenphk/3D-RECONSTRUCTION-TOOL/releases/tag/v3.0

- Ability view sample 2D models and their respective 3D maps
- Backend ability to download from cloud storage into local storage
- Upload functionality & view 3D model for a "Plan.png" file



