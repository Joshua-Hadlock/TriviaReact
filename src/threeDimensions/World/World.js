import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { CubicBezierCurve3 } from 'three.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    controls.enableZoom = false;
    controls.enablePan = false;

    const cube = createCube();
    const cube2 = createCube();
    const cube3 = createCube();
    const cube4 = createCube();
    cube.position.set(0, -4, 0);
    loop.updatables.push(cube, cube2, cube3, cube4);
    cube2.position.set(0, -1, 0);
    cube3.position.set(0, 1, 0);
    cube4.position.set(0, 3, 0);
    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight, cube, cube2, cube3, cube4);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
  
}

export { World };
