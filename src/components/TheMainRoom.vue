<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { randomHsl } from "../utils/color.js";
import PortalTeleporter from "./PortalTeleporter.vue";
import ExitDoor from "./ExitDoor.vue";

import "../aframe/bind-position.js";
import "../aframe/generate-train_rail.js";

defineProps({
	scale: Number,
});

const colorBoxLeft = ref(randomHsl());
const colorBoxRight = ref(randomHsl());

/// Initialize the train position
const trainPosition = ref({ x: -50, y: 1.355, z: -5 });

// Computed to check if the train is in position
const isTrainInPosition = computed(() => {
	return (
		trainPosition.value.x === 3.5 &&
		trainPosition.value.y === 1.355 &&
		trainPosition.value.z === -5
	);
});

// Update the train position
const updateTrainPosition = () => {
	trainPosition.value = { x: 3.5, y: 1.355, z: -5 };
};
</script>

<template>
	<!-- light -->
	<a-entity light="type: ambient; color: #A3A7BF"></a-entity>

	<a-entity id="train_station">
		<a-entity
			geometry="primitive: box; width: 1; height: 1; depth: 6.5"
			position="0 0 0"
			material="color: #A6A6A6; "
			rotation="0 0 0"></a-entity>

		<!-- train stop -->
		<a-entity
			gltf-model="#train_station"
			rotation="0 90 0"
			position="0 -16.638 15"
			scale="30 30 30">
		</a-entity>

		<!-- vending machine -->
		<a-entity
			id="vending_machine"
			gltf-model="#vending_machine"
			rotation="0 0 0"
			position="1.128 1.163 3.237"
			scale="0.700 0.700 0.700">
		</a-entity>

		<!-- bench -->
		<a-entity
			id="bench"
			gltf-model="#bench"
			rotation="0 180 0"
			position="1.868 0.475 1"
			scale="0.700 0.700 0.700">
		</a-entity>

		<!-- bench -->
		<a-entity
			id="bench"
			gltf-model="#bench"
			rotation="0 180 0"
			position="-0.872 0.495 1"
			scale="0.700 0.700 0.700">
		</a-entity>
	</a-entity>

	<!-- train rail -->
	<a-entity id="train_rails" generate-train_rail="numRails: 200"> </a-entity>

	<!-- train -->
	<a-entity
		id="train"
		position="-150 0 -5"
		animation="property: position; to: -3.25 0 -5; dur: 200; easing: easeOutQuad;"
		@animationcomplete="updateTrainPosition">
		<a-entity id="train_model" gltf-model="#train" rotation="0 0 0" scale="1 1 1">
		</a-entity>

		<!-- nav mesh -->
		<a-entity
			id="train-nav-mesh"
			position="-1 0 0"
			geometry="primitive: plane; height: 3; width: 12.480"
			rotation="-90 0 0"
			data-role="nav-mesh"
			material="color: green"
			visible="true"></a-entity>
	</a-entity>

	<!-- Train entry portal -->
	<template v-if="isTrainInPosition">
		<a-entity @click="onTeleport">
			<PortalTeleporter
				label="Enter the Train"
				material="color: #0000FF"
				position="1.530 1.933 -3.457"
				rotation="0 0 0"
				_x="0"
				_y="1"
				_z="-5"
				x="0"
				y="1.5"
				z="-6"
				cameraX="0"
				cameraY="1.5"
				cameraZ="-6"
				:rot="0"
				:cameraEffect="false" />
			<!-- -3.25 0 -5 -->
		</a-entity>
	</template>

	<a-entity id="train_stop">
		<a-entity
			geometry="primitive: box; width: 1; height: 1; depth: 6.5"
			position="0 0 0"
			material="color: #A6A6A6; "
			rotation="0 0 0"></a-entity>

		<!-- train stop -->
		<a-entity
			gltf-model="#onsen"
			rotation="0 -90 0"
			position="200 -0.491 5.810"
			scale="1 1 1">
		</a-entity>

		<!-- bench -->
		<a-entity
			id="bench"
			gltf-model="#bench"
			rotation="0 180 0"
			position="201.868 0.475 0"
			scale="0.700 0.700 0.700">
		</a-entity>
	</a-entity>

	<ExitDoor />

	<!-- Main room navigation mesh  -->
	<a-entity
		id="main-room-nav-mesh"
		geometry="primitive: plane; height: 21.260; width: 30.950"
		position="-10.180 0 7.560"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		visible="true"></a-entity>
</template>
