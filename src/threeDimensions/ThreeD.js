import { World } from './World/World.js';

export default function displayCube(theContainer) {
  // Get a reference to the container element
  const container = theContainer;

  // create a new world
  const world = new World(container);

  // start the animation loop
  world.start();
}
