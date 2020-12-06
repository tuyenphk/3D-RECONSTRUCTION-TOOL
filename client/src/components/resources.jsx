import React, {Component} from 'react';
import Document1 from '../document/nebula-3d-imaging.pdf';
import Document2 from '../document/Pixel2Mesh.pdf';
export class Resources extends Component {
  render(){
    return (
      <div id="resources">
        <div className="container">
          <div className="row">
              <div className="about-text">
                <h2>RESOURCES</h2>
                 <p>1. Stephan Wenger, Dirk Lorenz, and Marcus Magnor, "Fast Image-Based Modeling of Astronomical Nebulae":  &nbsp;
                   <a className="document" href = {Document1} alt="link to resume">astronomical nebulae</a></p>
                  
                  <p>2. Nanyang Wang, Yinda Zhang, Zhuwen Li, Yanwei Fu, Wei Liu, Yu-Gang Jiang, "Pixel2Mesh: Generating 3D Mesh Models
                    from Single RGB Images" &nbsp;
                  <a className="document" href = {Document2} alt="link to resume">Pixel2Mesh</a></p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resources