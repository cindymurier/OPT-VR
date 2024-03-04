<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheMainRoom from "./TheMainRoom.vue";

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
		fog="type: linear; color: #87CEEB; near:30; far:50;">
		<a-assets @loaded="allAssetsLoaded = true">
			<a-mixin id="fog_material" material="fog: false"></a-mixin>
			<!-- <a-asset-item>
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
			<a-asset-item id="train" src="assets/train.glb"></a-asset-item>

			<!--
        Title: Onsen
        Model source: https://sketchfab.com/3d-models/train-1a87a133a54c40fdb313f87e7cdc398f
        Model author: https://sketchfab.com/metrosp (metrosp)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="onsen" src="assets/onsen.glb"></a-asset-item>
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
				speed="3"></a-ocean>
		</template>

		<a-light
			type="directional"
			color="#FFF"
			intensity="1"
			position="2 4 -1"></a-light>

		<!-- sky -->
		<!-- <a-sky src="#sky" mixin="fog_material sky_material"></a-sky> -->

		<TheCameraRig />
	</a-scene>
</template>
