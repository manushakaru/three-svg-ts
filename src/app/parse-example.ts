import { AmbientLight, Color, PointLight, Scene } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { ThreeJSApp } from "./threejs-app"
import { SVGParser, SVGShape } from "three-svg-js";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { showSVG } from "./showsvg";
import { BaseShape } from "../../projects/three-svg-js/src/lib/baseshape";
import { TextShape } from "../../projects/three-svg-js/src/lib/textshape";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";

export class SVGParseExample {

  dispose = () => { }

  constructor(app: ThreeJSApp) {

    const scene = new Scene()
    scene.background = new Color().setStyle('#666')
    app.scene = scene

    app.camera.position.z = 2

    const orbit = new OrbitControls(app.camera, app.domElement);
    orbit.target.set(0, app.camera.position.y, 0)
    //orbit.enableRotate = false;
    orbit.update();

    const ambient = new AmbientLight()
    ambient.intensity = 0.1
    scene.add(ambient)

    const light = new PointLight(0xffffff, 1, 100)
    light.position.set(-1, 1, 2)
    light.shadow.bias = -0.001 // this prevents artifacts
    light.shadow.mapSize.width = light.shadow.mapSize.height = 512 * 2
    scene.add(light)

    //scene.add(new AxesHelper())

    const text = `

<svg xmlns="http://www.w3.org/2000/svg" stroke-linejoin="round" viewBox="0 0 100 100">
  <path d="M50,4L4,50L50,96L96,50Z" stroke="#FE4" stroke-width="3"/>
  <path d="M50,5L5,50L50,95L95,50Z" stroke="#333" fill="#FE4" stroke-width="3"/>
  <g transform="scale(0.8) translate(14,30)">
    <path d="M37,42c-1,0,11-20,13-20c1,0,15,20,13,20h-9c0,8,9,22,12,25l-4,4l-8,-7v13h-10v-35z" stroke="#CA0" fill="#CA0"/>
    <path d="M35,40c-1,0,11-20,13-20c1,0,15,20,13,20h-9c0,8,9,22,12,25l-4,4l-8,-7v13h-10v-35z" stroke="#333" fill="#555"/>
  </g>
 <g transform="translate(50,26) scale(0.25)" stroke-width="2">
   <g fill="none">
    <ellipse stroke="#469" rx="6" ry="44"/>
    <ellipse stroke="#ba5" rx="6" ry="44" transform="rotate(-66)"/>
    <ellipse stroke="#68c" rx="6" ry="44" transform="rotate(66)"/>
    <circle  stroke="#331" r="44"/>
   </g>
   <g fill="#689" stroke="#FE4">
    <circle fill="#80a3cf" r="13"/>
    <circle cy="-44" r="9"/>
    <circle cx="-40" cy="18" r="9"/>
    <circle cx="40" cy="18" r="9"/>
   </g>
 </g>
</svg>
    `
    const parser = new SVGParser()
    const schema = parser.parse(text)
    console.warn(schema)

    const loader = new FontLoader();
    loader.load('assets/helvetiker_regular.typeface.json', (font: Font) => {
      const svgshape2 = new SVGShape(schema.options)
      svgshape2.load(schema)

      svgshape2.traverse(object => {
        const shape = object as BaseShape
        if (shape.shapetype == 'text') {
          (shape as TextShape).font = font
        }
      })
      svgshape2.update()

      svgshape2.scale.setScalar(0.01)
      svgshape2.position.set(-1.5, 0.5, 0)
      scene.add(svgshape2);
      //console.warn(svgshape2)
    })

    const svg = new SVGLoader().parse(text);
    const group = showSVG(scene, svg.paths)
    group.scale.set(0.01, -0.01, 1)
    group.position.set(0.5, 0.5, 0)


    this.dispose = () => {
      orbit.dispose()
    }
  }
}
