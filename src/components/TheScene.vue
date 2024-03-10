<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheMainRoom from "./TheMainRoom.vue";

import "../aframe/day-night-cycle.js";
import "../aframe/listen-to.js";

defineProps({
	scale: Number,
	overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
	<a-scene
		background="color: #87CEEB;"
		physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
		fog="type: linear; color: #87CEEB; near:30; far:45;">
		<a-assets @loaded="allAssetsLoaded = true">
			<!--
        Title: Beach Ocean Waves
        Music source: https://opengameart.org/content/beach-ocean-waves
        Music author: https://freesound.org/people/jasinski/ (jasinski)
      -->
			<a-asset-item
				id="ocean_sound"
				response-type="arraybuffer"
				src="assets/ocean.mp3"
				preload="auto"></a-asset-item>

			<!--
        Title: Train - Railroad - Traffic Sound
        Music source: https://pixabay.com/sound-effects/train-railroad-traffic-sound-8002/
        Music author: https://pixabay.com/users/juliush-3921568/ (JuliusH)
      -->
			<a-asset-item
				id="train_sound"
				response-type="arraybuffer"
				src="assets/train_sound.mp3"
				preload="auto"></a-asset-item>

			<!--
        Title: Unreleased Game Music Pack, Cafofo - MUSIC - Contemplation 3
        Music source: https://opengameart.org/content/unreleased-game-music-pack
        Music author: https://opengameart.org/users/estudiocafofo (estudiocafofo)
      -->
			<a-asset-item
				id="contemplation_sound"
				response-type="arraybuffer"
				src="assets/contemplation3.wav"
				preload="auto"></a-asset-item>

			<!--
        Title: Rail Minecraft
        Model source: https://sketchfab.com/3d-models/rail-minecraft-e5a71540d31940408366252c7c7c55df
        Model author: https://sketchfab.com/JDanielHE (JDanielHE)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="rail" src="assets/rail.glb"></a-asset-item>

			<!--
        Title: train-station
        Model source: https://sketchfab.com/3d-models/train-station-74538d566a794e8ea86c72646bee5597
        Model author: https://sketchfab.com/madexc (madexc)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item
				id="train_station"
				src="assets/train_station.glb"></a-asset-item>

			<!--
        Title: Vending Machine
        Model source: https://sketchfab.com/3d-models/vending-machine-5b9cf13565c5475497d8e56d7473c97c
        Model author: https://sketchfab.com/l0y (晴路卡)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item
				id="vending_machine"
				src="assets/vending_machine.glb"></a-asset-item>

			<!--
        Title: Bench [Minecraft]
        Model source: https://sketchfab.com/3d-models/bench-minecraft-b594dc66811c4a8baf2cd5ccd6768530
        Model author: https://sketchfab.com/sedona1029 (sedona1029)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="bench" src="assets/bench.glb"></a-asset-item>

			<!--
        Title: CD810 motor train
        Model source: https://sketchfab.com/3d-models/cd810-motor-train-121922992c4c44c9a121a40c82c79382
        Model author: https://sketchfab.com/continentialvoxels (voxellation)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="train_model" src="assets/train.glb"></a-asset-item>

			<!--
        Title: Minecraft Onsen
        Model source: https://sketchfab.com/3d-models/minecraft-onsen-00316db3b52a4ed99b3f7b0afd8f3c59
        Model author: https://sketchfab.com/fangzhangmnm (fangzhangmnm)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="onsen" src="assets/onsen.glb"></a-asset-item>

			<!--
        Title: Cloud
        Model source: https://sketchfab.com/3d-models/cloud-e2e3d3b273994e58a4d61ef554f61207
        Model author: https://sketchfab.com/mamickabee (mamickabee)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="clouds" src="assets/clouds.glb"></a-asset-item>

			<!--
        Title: Kaonashi & chihiro【Voxel】
        Model source: https://sketchfab.com/3d-models/kaonashi-chihirovoxel-2167b40a86b04621b39d30c60c0d08b9
        Model author: https://sketchfab.com/adiobrick (adiobrick)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="no-face" src="assets/no-face.glb"></a-asset-item>

			<!--
        Title: Humphead Fish
        Model source: https://sketchfab.com/3d-models/humphead-fish-1279401697a1468e91c307cc52765d3c
        Model author: https://sketchfab.com/CoolPixelpro (CoolPixelpro)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="fishModel" src="assets/fish.glb"></a-asset-item>

			<!--
        Title: Origami - Water Lilies
        Model source: https://sketchfab.com/3d-models/origami-water-lilies-b02aeabe3e0b461cb214c90e5a6b3b75
        Model author: https://sketchfab.com/Clonk (Clonk)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="waterLilyModel" src="assets/water-lily.glb"></a-asset-item>

			<!--
        Title: Spirited Away Diorama - Jack Henderson AGA208
        Model source: https://sketchfab.com/3d-models/spirited-away-diorama-jack-henderson-aga208-af157b89b72043e4850f9cbfc2db9822
        Model author: https://sketchfab.com/JackVanH3D (JackVanH3D)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="dioramaModel" src="assets/diorama.glb"></a-asset-item>
		</a-assets>

		<template v-if="allAssetsLoaded">
			<TheMainRoom :scale="scale" />
			<a-ocean
				color="#064273"
				position="90 0 0"
				width="500"
				depth="200"
				density="80"
				speed="2"></a-ocean>
			<a-ocean
				color="#074F8A"
				position="90 0 0"
				width="500"
				depth="200"
				density="100"
				speed="3"
				listen-to="target: a-scene; event: enter-scene; emit: play-sound"
				sound="src: #ocean_sound; on: play-sound; loop: true; volume: 0.5;"></a-ocean>
		</template>

		<!-- sun -->
		<a-entity
			id="sun"
			light="type: directional; color: #FFA500; intensity: 1"
			position="0 1 -1"
			animation="property: light.color; from: #FFA500; to: #FFA500; dur: 30000; easing: easeInQuad; loop: false"
			animation__pos="property: position; to: 0 -1 -1; dur: 60000; easing: easeInQuad; loop: false"
			animation__intensity="property: light.intensity; from: 1; to: 0.1; dur: 60000; easing: easeInQuad; loop: false">
		</a-entity>

		<!--light -->
		<a-entity light="type: ambient; color: #555; intensity: 0.3"></a-entity>

		<!-- sky -->
		<!-- <a-sky src="#sky" mixin="fog_material sky_material"></a-sky> -->

		<a-entity id="day-night-cycle" day-night-cycle="duration: 60000;"></a-entity>

		<TheCameraRig position="-5 0 0" />
	</a-scene>
</template>
