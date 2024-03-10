<p align="center">
    <img src="./logo.svg" alt="VAV Logo" align="center"/>
</p>
<h1 align="center">Vue + A-Frame + Vite boilerplate</h1>

> A boilerplate for A-Frame 1.5, Vue 3.4 and Vite 5.0

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![A-Frame](https://img.shields.io/badge/A%E2%80%93Frame-1.5-brightgreen?style=for-the-badge&labelColor=%23ef2d5e&color=%23ef2d5e)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### [>> DEMO <<](https://onivers.com/aframe-vue-boilerplate/)

## Included in the boilerplate

### Libs and components

- [aframe-extras controls and animation-mixer](https://github.com/c-frame/aframe-extras) (MIT License)
- [aframe physx](https://github.com/c-frame/physx) (MIT License)
- [aframe-blink-controls](https://github.com/jure/aframe-blink-controls) (MIT License)
- [simple-navmesh-constraint](https://github.com/AdaRoseCannon/aframe-xr-boilerplate) (MIT Licence)

### Movement modes support

- **Desktop** – Keyboard for move (_WASD_ or Arrows keys) + Mouse for look control (Drag and drop)
- **Mobile** – 1x Finger touch to go forward + 2x Fingers touch to go backward + Gaze cursor for click
- **VR Headset** – AR/VR walk + Teleport (Grip for grab and laser for click) + Gaze cursor for click

### 3D models

- **Main room** – [Rail Minecraft](https://sketchfab.com/3d-models/rail-minecraft-e5a71540d31940408366252c7c7c55df) by [JDanielHE](https://sketchfab.com/JDanielHE) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Main room** – [train-station](https://sketchfab.com/3d-models/train-station-74538d566a794e8ea86c72646bee5597) by [madexc](https://sketchfab.com/madexc) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Main room** – [Vending Machine](https://sketchfab.com/3d-models/vending-machine-5b9cf13565c5475497d8e56d7473c97c) by [晴路卡](https://sketchfab.com/l0y) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Main room** – [Bench [Minecraft]](https://sketchfab.com/3d-models/bench-minecraft-b594dc66811c4a8baf2cd5ccd6768530) by [sedona1029](https://sketchfab.com/sedona1029) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Main room** – [CD810 motor train](https://sketchfab.com/3d-models/cd810-motor-train-121922992c4c44c9a121a40c82c79382) by [voxellation](https://sketchfab.com/continentialvoxels) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Main room** – [Minecraft Onsen](https://sketchfab.com/3d-models/minecraft-onsen-00316db3b52a4ed99b3f7b0afd8f3c59) by [fangzhangmnm](https://sketchfab.com/fangzhangmnm) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Main room** – [Cloud](https://sketchfab.com/3d-models/cloud-e2e3d3b273994e58a4d61ef554f61207) by [mamickabee](https://sketchfab.com/mamickabee) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Main room** – [Kaonashi & chihiro【Voxel](https://sketchfab.com/3d-models/kaonashi-chihirovoxel-2167b40a86b04621b39d30c60c0d08b9) by [adiobrick](https://sketchfab.com/adiobrick) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Main room** – [Humphead Fish](https://sketchfab.com/3d-models/humphead-fish-1279401697a1468e91c307cc52765d3c) by [CoolPixelpro](https://sketchfab.com/CoolPixelpro) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Main room** – [Origami - Water Lilies](https://sketchfab.com/3d-models/origami-water-lilies-b02aeabe3e0b461cb214c90e5a6b3b75) by [Clonk](https://sketchfab.com/Clonk) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Main room** – [Spirited Away Diorama - Jack Henderson AGA208](https://sketchfab.com/3d-models/spirited-away-diorama-jack-henderson-aga208-af157b89b72043e4850f9cbfc2db9822) by [JackVanH3D](https://sketchfab.com/JackVanH3D) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)


### Sounds

- **Main room** – [Beach Ocean Waves](https://opengameart.org/content/beach-ocean-waves) by [jasinski](https://freesound.org/people/jasinski/) 
- **Main room** – [Train - Railroad - Traffic Sound](https://pixabay.com/sound-effects/train-railroad-traffic-sound-8002/) by [JuliusH](https://pixabay.com/users/juliush-3921568/) 
- **Main room** – [Unreleased Game Music Pack, Cafofo - MUSIC - Contemplation 3](https://opengameart.org/content/unreleased-game-music-pack) by [estudiocafofo](https://opengameart.org/users/estudiocafofo) 


---

## Quickstart

### Create a folder for your project and move to it

### Clone (or fork, or download)

```sh
git clone https://github.com/Chabloz/a-frame-vite-vue-boilerplate.git .
```

### Install dependencies

```sh
npm ci
```

### Dev

```sh
npm run dev
```

### Build

```sh
npm run build
```

## Notes for local dev on VR headset

1. Check that your development device and your VR headset are connected on **the same network**.

2. Expose you local development:

```sh
npm run dev-expose
```

3. In your VR headset, browse to the local development adress `[ip]:[port]`.

> [!NOTE]  
> The certificate is self-signed, so you will probably have to confirm access to the resource in your browser.

---

## License

![MIT License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge&color=%23262626)
