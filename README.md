# Template for bootstrapping three.js application. 
Created to speed up process of setting up new project for computer graphics lessons at my university.  
The code is split into 2 files
- src/init.js where scene, camera, renderer and orbit controls are set. There is also a listener that responds to window resize event and adjusts appropriate settings.
- src/main.js in this file example object and ambient light is added. It contains animation loop. This is a file where you should start your project.

Files are compiled to public/bundle.js using [rollup](https://rollupjs.org) which is included in public/index.html.  
To start development run ``npm run dev`` which listens to changes in src/main.js file and compiles it. This script also runs a server at http://localhost:3000. 