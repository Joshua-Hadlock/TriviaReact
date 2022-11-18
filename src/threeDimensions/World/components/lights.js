import {
    AmbientLight,
    DirectionalLight,
    HemisphereLight,
  } from 'three';
  
  function createLights() {
    // const ambientLight = new AmbientLight('white', 2);
  
    const ambientLight = new HemisphereLight(
      'white', // bright sky color
      'darkslategrey', // dim ground color
      5, // intensity
    );
  
    const mainLight = new DirectionalLight('gray', 3);
    mainLight.position.set(5, 5, 5);
  
    return { ambientLight, mainLight };
  }
  
  export { createLights };