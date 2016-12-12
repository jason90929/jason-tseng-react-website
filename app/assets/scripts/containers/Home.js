import React, {Component} from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        var stars = [];
        for (let i = 0; i < 400; i++) { // 星星數量
            stars.push(<Entity geometry={{primitive: 'sphere', radius: Math.random() * .05 + .01}} material={{color: '#fff'}} position={[(Math.random() * 80 - 40), (Math.random() * 300 - 150), (Math.random() * 200 - 100)]} />);
        }

        return (
            <figure className="pof full">
                {/* embedded 為不要讓他綁整個畫面，可在其他頁面使用 scroll */}
                {/* vr-mode-ui="enabled: false" 不要顯示右下角的 VR 模式 */}
                {/* vr-mode-ui="enabled: false" 時，就不能放 embedded 了不然會出錯 = = */}
                <Scene vr-mode-ui={{enabled: false}}>
                    {/*會自動緩慢移動的攝影機*/}
                    <Entity position={[0, 2, 5]}
                              alongpath="path:-1,0,3 2,3,0 1,2,-3 2,0,-5 4,0,-2 4,0,2; closed:true; dur:50000">
                        <Entity camera look-controls id="player">
                            {/*<Entity primitve="a-cursor" material={{color: "#FFF"}} />*/}
                        </Entity>
                    </Entity>

                    {/*月亮*/}
                    <Entity geometry={{primitive: 'sphere', radius: 3}} material={{color: '#F5F3CE'}} position={[91, 106, -82]}/>

                    {/*火星*/}
                    <Entity geometry={{primitive: 'sphere', radius: .8}} material={{color: '#FFD0D0'}} position={[-46, 74, -135]}/>
                    {stars}

                    {/*漸層背景*/}
                    <Entity primitive="a-gradient-sky" material={{topColor: '0.00390625 0.09375 0.1796875', bottomColor: '0.0078125 0.12109375 0.23046875'}}/>
                </Scene>
            </figure>
        );
    }
}

export default Home;

// 漸層天空色
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

// 攝影機移動效果
// http://dirosa.me/cat-garden/
var alongpathComp = {
    schema: {
        path     : { default: ''    },
        closed   : { default: false },
        dur      : { default: 1000  }
    },

    init: function() {
        var ent = this.el;
        var d = this.data;
        var points = d.path.split(' ').map(function(p) {
            p = p.split(',');
            return new THREE.Vector3(
                parseFloat(p[0]),
                parseFloat(p[1]),
                parseFloat(p[2])
            );
        });
        var ctor = d.closed ? 'ClosedSplineCurve3' : 'SplineCurve3';
        var curve = new THREE[ctor](points);

        var onFrame = function onFrame(t) {
            window.requestAnimationFrame(onFrame);
            t = t % d.dur;
            var i = t / d.dur;
            try {
                var p = curve.getPoint(i);
                ent.setAttribute('position', p);
            } catch (ex) {}
        };

        onFrame();
    },

    update: function(oldData) {},

    remove: function() {}
};

AFRAME.registerComponent('alongpath', alongpathComp);

