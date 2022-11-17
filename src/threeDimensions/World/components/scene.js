import { Color, Scene } from 'three';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('#13262F');

  return scene;
}

export { createScene };
