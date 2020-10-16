import React, {Component} from 'react';

import {Canvas } from 'react-three-fiber'
import {Box} from 'drei'

export class Rend extends Component{
    render(){
        return(
            <Canvas>
                 
                 <Box>
                    <meshStandardMaterial attach='material'/>
                  </Box>
            </Canvas>
        );
    }
}
export default Rend;
