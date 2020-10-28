import React, { Component } from "react";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import * as d3 from 'd3'
//import 'd3-selection-multi'
//import OrbitControls from "three-orbitcontrols";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class Rend extends Component {

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();

    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#263238");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //add Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, 5, 10);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));


    //Camera Controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;
    controls.campingFactor = 0.25;
    controls.enableZoom = true;

    //LIGHTS
    var lights = [];
    lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

    //Simple Box with WireFrame
    this.addModels();

    this.renderScene();
    //start animation
    this.start();
  }

  addModels() {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({
      color: "#0F0"
    });
    this.cube = new THREE.Mesh(geometry, material);
    //this.scene.add(this.cube);

    //LOAD TEXTURE and on completion apply it on SPHERE
    new THREE.TextureLoader().load(
      "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      texture => {
        //Update Texture
        this.cube.material.map = texture;
        this.cube.material.needsUpdate = true;
      },
      xhr => {
        //Download Progress
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      error => {
        //Error CallBack
        console.log("An error happened" + error);
      }
    );

    //Rotate Models
    if (this.cube) this.cube.rotation.y += 0.01;

    //Loading 3d Models
    //Loading Material First
    var mtlLoader = new MTLLoader();
    mtlLoader.setBaseUrl("./assets/");
    mtlLoader.load("freedom.mtl", materials => {
      materials.preload();
      console.log("Material loaded");
      //Load Object Now and Set Material
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        "./assets/plane.obj",
        object => {
          this.freedomMesh = object;
          this.freedomMesh.position.setX(0.5); //or  this
          this.freedomMesh.position.setY(1); //or  this
          this.freedomMesh.position.setZ(6); //or  this
          this.freedomMesh.scale.set(10, 10, 10);
          this.scene.add(this.freedomMesh);
        },
        xhr => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        error => {
          console.log("An error happened" + error);
        }
      );
    });

    // Set up zoom behavior
    const zoom = d3.behavior.zoom()
      .scaleExtent([10, 300])
      .on('zoom', () => {
        const event = d3.event;
        if (event.sourceEvent) {

          // Get z from D3
          const new_z = event.transform.k;

          if (new_z !== this.camera.position.z) {

            // Handle a zoom event
            const { clientX, clientY } = event.sourceEvent;

            // Project a vector from current mouse position and zoom level
            // Find the x and y coordinates for where that vector intersects the new
            // zoom level.
            // Code from WestLangley https://stackoverflow.com/questions/13055214/mouse-canvas-x-y-to-three-js-world-x-y-z/13091694#13091694
            const vector = new THREE.Vector3(
              clientX / this.width * 2 - 1,
              - (clientY / this.height) * 2 + 1,
              1
            );
            vector.unproject(this.camera);
            const dir = vector.sub(this.camera.position).normalize();
            const distance = (new_z - this.camera.position.z) / dir.z;
            const pos = this.camera.position.clone().add(dir.multiplyScalar(distance));

            // Set the camera to new coordinates
            this.camera.position.set(pos.x, pos.y, new_z);

          } else {

            // Handle panning
            const { movementX, movementY } = event.sourceEvent;

            // Adjust mouse movement by current scale and set camera
            const current_scale = this.getCurrentScale();
            this.camera.position.set(this.camera.position.x - movementX / current_scale, this.camera.position.y +
              movementY / current_scale, this.camera.position.z);
          }
        }
      });

    // Add zoom listener
    const view = d3.select(this.renderer.domElement);
    view.call(zoom);

    // Disable double click to zoom because I'm not handling it in Three.js
    view.on('dblclick.zoom', null);

    // Sync d3 zoom with camera z position
    zoom.scale(view, 125);

  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{
          width: "800px", height: "800px",
          margin: "auto",
        }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }

// From https://github.com/anvaka/three.map.control, used for panning
 getCurrentScale() {
  var vFOV = this.camera.fov * Math.PI / 180
  var scale_height = 2 * Math.tan( vFOV / 2 ) * this.camera.position.z
  var currentScale = this.height / scale_height
  return currentScale
};

// Point generator function
 phyllotaxis(radius) {
  const theta = Math.PI * (3 - Math.sqrt(5));
  return function(i) {
    const r = radius * Math.sqrt(i), a = theta * i;
    return [
      this.width / 2 + r * Math.cos(a) - this.width / 2,
      this.height / 2 + r * Math.sin(a) - this.height / 2
    ];
  };
};
}
export default Rend;
