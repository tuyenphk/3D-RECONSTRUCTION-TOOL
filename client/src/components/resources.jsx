import React, {Component} from 'react';
import Paper1 from '../document/nebula-3d-imaging.pdf';
import Paper2 from '../document/Pixel2Mesh.pdf';
import Paper3 from '../document/resNet.pdf';
import Paper4 from '../document/NeuralNetworks.pdf';
export class Resources extends Component {
  render(){
    return (
      <div id="resources">
        <div className="container">
          <div className="row">
              <div className="about-text">
                <h2>RESOURCES</h2>
                 <p>1. Stephan Wenger, Dirk Lorenz, and Marcus Magnor, "Fast Image-Based Modeling of Astronomical Nebulae", Volume 32 (2013), Number 7,  &nbsp;
                   <a className="paper" href = {Paper1} alt="link to paper">Astronomical Nebulae</a></p>
                  
                  <p>2. Nanyang Wang, Yinda Zhang, Zhuwen Li, Yanwei Fu, Wei Liu, Yu-Gang Jiang, "Pixel2Mesh Generating 3D Mesh Models
                    from Single RGB Images", ECCV 2018 paper, provided here by the Computer Vision Foundation, &nbsp;
                  <a className="paper" href = {Paper2} alt="link to paper">Pixel2Mesh</a></p>

                  <p>3. Lin Gao, Ling-Xiao Zhang, Hsien-Yu Meng, Yi-Hui Ren, Yu-Kun Lai, Leif Kobbelt, "PRS-Net: Planar Reflective Symmetry Detection
                      Net for 3D Models", IEEE  Transactions On Visualization And Computer Graphics, VOL. XX, NO. XX, JULY 2019, &nbsp;
                    <a className="paper" href = {Paper3} alt="link to paper">ResNet</a></p>   

                  <p>4. Sven Krippendorf, Marc Syvaeri, "Detecting Symmetry with Neural Networks", 30 March 2020, &nbsp;
                      <a className="paper" href = {Paper4} alt="link to paper">Neural Networks</a></p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resources