//todo modular las distintas partes de este codigo en codigos mas pequeños para que solo hagan 1 funcion.
//todo estudiar como programar las orbitas de las lunas, de la forma normal, como se ha creado la obita de los planetas
//todo al sol o como se han creado los anillos, pero con satelites.
import * as THREE from './three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import stars from './img/starsskybox.jpg'
import solTexture from './img/Textures/8k_sun.jpg'
import mercuryTexture from './img/Textures/8k_mercury.jpg'
import venusTexture from './img/Textures/8k_venus_surface.jpg'
import earthTexture from './img/Textures/earth/8k_earth_daymap.jpg'
import marsTexture from './img/Textures/8k_mars.jpg'
import jupiterTexture from './img/Textures/8k_jupiter.jpg'
import saturnTexture from './img/Textures/saturn/8k_saturn.jpg'
import saturnRingTexture from './img/Textures/saturn/saturn_ring.png'
import uranusTexture from './img/Textures/2k_uranus.jpg'
import uranusRingTexture from './img/Textures/uranus_ring.png'
import neptuneTexture from './img/Textures/2k_neptune.jpg'
import plutoTexture from './img/Textures/2k_neptune.jpg'

//Creacion de escena
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
renderer.shadowMap.enabled = true;

//Texture Loader
const textureLoader = new THREE.TextureLoader();

//Camara
const camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 0.1, 1200000000000);
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-780, 370, 320);
orbit.update();

//Creacion de background 3D
const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([stars,stars,stars,stars,stars,stars]);


//DOM ELEMENTS
//reset camera
//document.getElementById('camera_reset').onclick = function (){camera.position.set(-780, 370, 320)};

//Planet camera controls
//document.getElementById('Mercurio').onclick = function ()

// Hacer la app responsiva
window.addEventListener('resize', function (){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth/window.innerHeight);});


//FUNCIONES
//Funcion creación planetas
function createPlanet (size,texture,position,ring,moon) {
    const Geometry = new THREE.SphereGeometry(size, 100, 100);
    const Material = new THREE.MeshStandardMaterial({map: textureLoader.load(texture)});
    const mesh = new THREE.Mesh(Geometry, Material);
    const object = new THREE.Object3D();
    object.add(mesh);
    if (ring){
        const ringGeometry = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius,50);
        const ringMaterial = new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide});

        const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
        object.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;}

    else if (moon){
        const moonGeometry = new THREE.SphereGeometry(moon.innerRadius, moon.outerRadius,32);
        const moonMaterial = new THREE.MeshBasicMaterial({
            map: textureLoader.load(moon.texture)});

        const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
        object.add(moonMesh);
        moonMesh.position.x = position;
        moonMesh.rotation.x = -0.5 * Math.PI;}

    scene.add(object);
    mesh.position.x = position;
    return{mesh, object}
}

//FUcion crear elipses (orbitas visibles)
function createEllipse(aX, yX, xRadius, Yradius, aStartAngle, aEndAngle, aClockwise, aRotation){
    const EllipseSettings = new THREE.EllipseCurve(
        aX,yX, xRadius,Yradius,aStartAngle,aEndAngle,aClockwise, aRotation);
    const points = EllipseSettings.getPoints( 1000 );
    const EllipseGeometry = new THREE.BufferGeometry().setFromPoints( points );
    const material = new THREE.LineBasicMaterial( { color: 0xb4b4b7} );
    const Ellipse = new THREE.Line( EllipseGeometry, material );
    Ellipse.rotation.x = -0.5 * Math.PI;
    scene.add(Ellipse);
}

//ELIPSES
createEllipse(0, 0, 1082000,1082000, 2 * Math.PI, false, 0);//Mercurio
createEllipse(0, 0, 1496000,1496000, 2 * Math.PI, false, 0);//Venus
createEllipse(0, 0, 2279400,2279400, 2 * Math.PI, false, 0);//Tierra
createEllipse(0, 0, 3775400,3775400, 2 * Math.PI, false, 0);//Marte
createEllipse(0, 0, 7783300,7783300, 2 * Math.PI, false, 0);//Jupiter
createEllipse(0, 0, 14294000,14294000, 2 * Math.PI, false, 0);//Saturno
createEllipse(0, 0, 28709000,28709000, 2 * Math.PI, false, 0);//Urano
createEllipse(0, 0, 4504300,4504300, 2 * Math.PI, false, 0);//Neptuno


//OBJETOS CELESTES
//SOL
const solGeometry = new THREE.SphereGeometry(695000, 130, 130);
const solMaterial = new THREE.MeshBasicMaterial({map: textureLoader.load(solTexture)});
const sol = new THREE.Mesh(solGeometry, solMaterial);
const pointLight = new THREE.PointLight(0xFFFFFF, 2 ,1200000000000, 1 );
scene.add(pointLight, sol);

//PLANETAS
const mercury = createPlanet(2439.7, mercuryTexture, 1082000, false ,false);//Mercurio
const venus = createPlanet(6051.8, venusTexture,1496000, false, false )
const earth = createPlanet(6378.14, earthTexture, 2279400, false, {innerRadius: 10, outerRadius: 10});//Tierra
const mars = createPlanet(3397.2, marsTexture, 3775400, false, false);//Marte
const jupiter = createPlanet(71492.0, jupiterTexture, 7783300, false, false);//Jupiter
const saturn = createPlanet(60268.0, saturnTexture,14294000 ,{innerRadius: 50, outerRadius: 50, texture: saturnRingTexture}, false);//Saturno
const uranus = createPlanet(25559.0, uranusTexture, 28709000,{innerRadius: 50, outerRadius: 50, texture: uranusRingTexture}, false);//Urano
const neptune = createPlanet(24746.0, neptuneTexture, 45043000, false, false);//Neptuno
const pluto = createPlanet(1160.0, plutoTexture, 59135200, false, false);//Plutónç

//SATELITES







//TODO animacion en MAP

function staticanimation(){
    sol.rotateY(0.004);
    mercury.mesh.rotateY(0.004);
    venus.mesh.rotateY(0.002);
    earth.mesh.rotateY(0.02);
    mars.mesh.rotateY(0.018);
    jupiter.mesh.rotateY(0.04);
    saturn.mesh.rotateY(0.038);
    uranus.mesh.rotateY(0.03);
    neptune.mesh.rotateY(0.032);
    pluto.mesh.rotateY(0.008);
    renderer.render(scene,camera);}

function dynamicanimation(){
    sol.rotateY(0.004);
    mercury.mesh.rotateY(0.004);
    mercury.object.rotateY(0.00017);
    venus.mesh.rotateY(0.002);
    venus.object.rotateY(0.00015);
    earth.mesh.rotateY(0.02);
    earth.object.rotateY(0.01);
    mars.mesh.rotateY(0.018);
    mars.object.rotateY(0.008);
    jupiter.mesh.rotateY(0.04);
    jupiter.object.rotateY(0.002);
    saturn.mesh.rotateY(0.038);
    saturn.object.rotateY(0.0009);
    uranus.mesh.rotateY(0.03);
    uranus.object.rotateY(0.0004);
    neptune.mesh.rotateY(0.032);
    neptune.object.rotateY(0.0001);
    pluto.mesh.rotateY(0.008);
    pluto.object.rotateY(0.00007);
    renderer.render(scene,camera);}

renderer.setAnimationLoop(staticanimation);
document.getElementById('camera_reset').onclick = function (){renderer.setAnimationLoop(dynamicanimation);
};
