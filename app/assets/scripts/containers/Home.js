import React, {Component} from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <figure className="pof full">
                <Scene>
                    <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={[0, 0, -5]}/>

                    <Entity primitive='a-light' type="ambient" color="#ddd" position="0 5 -3" />

                    <Entity primitive='a-gradient-sky' material={{topColor: '0.00390625 0.09375 0.1796875', bottomColor: '0.0078125 0.12109375 0.23046875'}}/>
                </Scene>
            </figure>
        );
    }
}

export default Home;

// http://stackoverflow.com/questions/40454143/gradient-sky-in-a-frame
AFRAME.registerShader('gradient', {
    schema: {
        topColor: {type: 'vec3', default: '1 0 0', is: 'uniform'},
        bottomColor: {type: 'vec3', default: '0 0 1', is: 'uniform'},
        offset: {type: 'float', default: '400', is: 'uniform'},
        exponent: {type: 'float', default: '0.6', is: 'uniform'}
    },
    vertexShader: [
        'varying vec3 vWorldPosition;',

        'void main() {',

        'vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',
        'vWorldPosition = worldPosition.xyz;',

        'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );',

        '}'
    ].join('\n'),
    fragmentShader: [
        'uniform vec3 bottomColor;',
        'uniform vec3 topColor;',
        'uniform float offset;',
        'uniform float exponent;',
        'varying vec3 vWorldPosition;',
        'void main() {',
        ' float h = normalize( vWorldPosition + offset ).y;',
        ' gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max(h, 0.0 ), exponent ), 0.0 ) ), 1.0 );',
        '}'
    ].join('\n')
});

AFRAME.registerPrimitive('a-gradient-sky', {
    defaultComponents: {
        geometry: {
            primitive: 'sphere',
            radius: 5000,
            segmentsWidth: 64,
            segmentsHeight: 20
        },
        material: {
            shader: 'gradient'
        },
        scale: '-1 1 1'
    },

    mappings: {
        topColor: 'material.topColor',
        bottomColor: 'material.bottomColor',
        offset: 'material.offset',
        exponent: 'material.exponent'
    }
});