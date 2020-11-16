import React, { Component } from "react";
import * as THREE from "three";
import { OBJLoader } from "three-obj-mtl-loader";
import * as d3 from 'd3'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class Rend extends Component {
  componentDidMount() {
    console.log("-in rend mounted props" + this.props.objFileName);


    this.scene = new THREE.Scene();
    //setup
    this.sceneSetup();
    //add lights
    //this.addCamera();
    //load models
    this.addModels();
    //render whole scene
    this.renderScene();
    //start animation
    this.start();
  }
  sceneSetup() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

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
    this.addLights();
  }

  /*addCamera(){
   
    }*/
  addLights() {
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
    this.camera.add(new THREE.PointLight(0xffffff, 1, 0));
  }
  addModels() {
    //Loading 3d Models
    var objLoader = new OBJLoader();
    var name = this.props.objFileName; //"./img/search/${this.props.searchObjFileName}.obj"
    console.log("-in rend on load  ----" + name);
    objLoader.load(name,//"./img/search/Sample7.obj",// "./assets/plane.obj", 
      object => {
        this.objMesh = object;
        this.objMesh.position.set(0.5, 1, 6)//(0.5, 1, 6);
        this.objMesh.scale.set(10, 10, 10);
        this.scene.add(this.objMesh);
      },
      xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      error => {
        console.log("An error happened" + error);
      }
    );
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  componentDidUpdate() {
    console.log("-in rend ComponentDidUpdate to " + this.props.objFileName);
    this.removeEntity();
    this.camera.position.set(0, 5, 10);
    this.addLights();
    this.addModels();
    this.renderScene();
    //start animation
    this.start();
  }

  removeEntity() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }
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
}
export default Rend;
