import { PerspectiveCamera } from 'three';
import { CubeCamera } from 'three.js';

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  camera.position.set(0, 0, 20);

  return camera;
}

export { createCamera };
