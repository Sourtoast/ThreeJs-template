import { AmbientLight, Mesh, MeshStandardMaterial, SphereGeometry } from "three"

import { camera, orbitControls, renderer, scene } from "./init"


const ambientLight = new AmbientLight('#fff', 0.1)
scene.add(ambientLight)

const exampleObject = new Mesh(new SphereGeometry(10, 64, 64), new MeshStandardMaterial({ color: '#fff' }))
scene.add(exampleObject)

const animate = () => {
	renderer.render(scene, camera)
	orbitControls.update()
	window.requestAnimationFrame(animate)
}
animate()
