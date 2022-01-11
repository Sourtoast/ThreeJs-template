import { AxesHelper, Color, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const sceneSize = Math.pow(10, 20)
const scene = new Scene()

// Kamera
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, sceneSize * 2)
camera.position.z = 20
camera.lookAt(scene.position)

// Renderer
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(new Color('#000'))
document.querySelector('body').appendChild(renderer.domElement)

// Other
const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.enableDamping = true
orbitControls.dumpingFactor = 0.01
const axesHelper = new AxesHelper(sceneSize);
scene.add(axesHelper)

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	renderer.render(scene, camera)
})

export { scene, camera, renderer, orbitControls }