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
		stats
		fog="type: linear; color: #87CEEB; near:30; far:45;">
		<a-assets @loaded="allAssetsLoaded = true">
			<a-asset-item
				id="ocean_sound"
				response-type="arraybuffer"
				src="assets/ocean.mp3"
				preload="auto"></a-asset-item>

			<a-asset-item
				id="train_sound"
				response-type="arraybuffer"
				src="assets/train_sound.mp3"
				preload="auto"></a-asset-item>

			<a-asset-item
				id="contemplation_sound"
				response-type="arraybuffer"
				src="assets/contemplation3.wav"
				preload="auto"></a-asset-item>

			<!-- <a-mixin id="fog_material" material="fog: false"></a-mixin>
			<a-asset-item>
				<img id="sky" src="/assets/sky.jpg" />
			</a-asset-item>
			<a-mixin id="sky_material" material="src: #sky"></a-mixin> -->

			<!--
        Title: Train track
        Model source: https://sketchfab.com/3d-models/train-track-bbfcc6c769434911ad704ef42eb4d2fb
        Model author: https://sketchfab.com/tekuto1s (tekuto1s)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="rail" src="assets/rail.glb"></a-asset-item>

			<!--
        Title: train-station
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item
				id="train_station"
				src="assets/train_station.glb"></a-asset-item>

			<!--
        Title: Vending machine
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item
				id="vending_machine"
				src="assets/vending_machine.glb"></a-asset-item>

			<!--
        Title: Bench
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="bench" src="assets/bench.glb"></a-asset-item>

			<!--
        Title: Train
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="train_model" src="assets/train.glb"></a-asset-item>

			<!--
        Title: Onsen
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="onsen" src="assets/onsen.glb"></a-asset-item>

			<!--
        Title: Clouds
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="clouds" src="assets/clouds.glb"></a-asset-item>

			<!--
        Title: No-face
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="no-face" src="assets/no-face.glb"></a-asset-item>

			<!--
        Title: Fish
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="fishModel" src="assets/fish.glb"></a-asset-item>

			<!--
        Title: water lily
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="waterLilyModel" src="assets/water-lily.glb"></a-asset-item>

			<!--
        Title: spirted away house
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="bathHouseModel" src="assets/bathhouse.glb"></a-asset-item>
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
