import {
    BoxBufferGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    TextureLoader,
  } from 'three';

  import moveToHere from '../../../images/test';
  import locationFinder from './textures/locationFinder';
  
  function createMaterial() {
    // create a texture loader.
    const textureLoader = new TextureLoader();
  
    // load a texture     texture is broken!!!  Must use a live server to run :(
    const texture = textureLoader.load(
        './textures/pexels-anni-roenkae-2693208.jpg',
    );

    // create a "standard" material using
    // the texture we just loaded as a color map
    const material = new MeshStandardMaterial({
      map: texture
    });
  
    return material;
  }
  
  function createCube() {
    const geometry = new BoxBufferGeometry(2, 2, 2);
    const material = createMaterial();
    const colorTexture = new MeshStandardMaterial({ color: '#dbb133' });
    const cube = new Mesh(geometry, colorTexture);
  
    // cube.rotation.set(-0.5, -0.1, 0.8);
  
    const radiansPerSecond = MathUtils.degToRad(270);
  
    cube.tick = (delta) => {
      // increase the cube's rotation each frame
      // cube.rotation.z += delta * radiansPerSecond;
      // cube.rotation.x += delta * radiansPerSecond;
      cube.rotation.y += delta * radiansPerSecond;
    };
  
    return cube;
  }
  
  export { createCube };