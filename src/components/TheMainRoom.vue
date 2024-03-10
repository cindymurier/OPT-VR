<script setup>
import { ref, computed, onMounted } from "vue";
import PortalTeleporter from "./PortalTeleporter.vue";
import RestartDoor from "./RestartDoor.vue";

import "../aframe/bind-position.js";
import "../aframe/generate-train_rail.js";
import "../aframe/generate-clouds.js";
import "../aframe/generate-fish.js";
import "../aframe/generate-waterlilies.js";

defineProps({
	scale: Number,
});

/// Initialize the train position
const trainPosition = ref({ x: -50, y: 0, z: -5 });

// Computed to check if the train is in position
const isTrainInPosition = computed(() => {
	return (
		trainPosition.value.x === 3.5 &&
		trainPosition.value.y === 0 &&
		trainPosition.value.z === -5
	);
});
// Update the train position
const updateTrainPosition = () => {
	trainPosition.value = { x: 3.5, y: 0, z: -5 };
};

const isTrainInSecondPosition = computed(() => {
	return (
		trainPosition.value.x === 200 &&
		trainPosition.value.y === 0 &&
		trainPosition.value.z === -5
	);
});
// Update the train position
const updateSecondTrainPosition = () => {
	trainPosition.value = { x: 200, y: 0, z: -5 };
};

function startTrain() {
	console.log("start train");

	// Delay the train start
	setTimeout(() => {
		document.querySelector("#train").emit("start-train");

		document
			.querySelector("#camera-rig")
			.setAttribute("bind-position", "target: #train;");
	}, 1500);
}

function playSound() {
	const train = document.querySelector("#train");
	train.components.sound.playSound();
}

function stopSound() {
	const train = document.querySelector("#train");
	train.components.sound.stopSound();
}

function playContemplationSound(e) {
	if (e.detail.name === "animation__stop") {
		const contemplationSound = document.querySelector("#contemplationSound");
		if (contemplationSound.components.sound) {
			contemplationSound.components.sound.playSound();
		}
	}
}

onMounted(() => {
	const train = document.querySelector("#train");
	train.addEventListener("animationbegin", playContemplationSound);
});

onMounted(() => {
	const train = document.querySelector("#train");
	train.addEventListener("animationbegin", playSound);
	train.addEventListener("animationbegin", playContemplationSound);
	train.addEventListener("animationcomplete", stopSound);
});
</script>

<template>
	<!-- light -->
	<a-entity light="type: ambient; color: #A3A7BF"></a-entity>

	<a-entity id="train_station">
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

	<!-- clouds -->
	<a-entity
		generate-clouds="numClouds: 50; minHeight: 15; maxHeight: 40; minScale: 1; maxScale: 7;">
	</a-entity>

	<!-- fish -->
	<a-entity
		id="fish"
		generate-fish="numFish: 10; minHeight: -10 ; maxHeight: 10; minX: 75; maxX: 95; minZ: -3 maxZ: -2;">
	</a-entity>

	<!-- water lilies -->
	<a-entity
		id="waterlilies"
		generate-waterlilies="numWaterlilies: 30; yPosition: 0.120; minScale: 0.1; maxScale: 0.5; minX: 65; maxX: 175; minZ: 40; maxZ: -40;">
	</a-entity>

	<!-- ambience sound -->
	<a-entity
		id="contemplationSound"
		sound="src: #contemplation_sound; autoplay: false; loop: true; volume: 0.5;"></a-entity>

	<!-- train -->
	<a-entity
		id="train"
		position="-150 0 -5"
		animation__arrive="property: position; to: -3.25 0 -5; dur: 10000; easing: easeOutQuad; startEvents: arrive-train; dir: alternate;"
		animation__stop="property: position; to: 200 0 -5; dur: 40000; easing: easeInOutQuad; startEvents: start-train;"
		@animationbegin="playSound"
		@animationcomplete="stopSound"
		@animationcomplete__arrive="updateTrainPosition"
		@animationcomplete__stop="updateSecondTrainPosition"
		sound="src: #train_sound; autoplay: false; volume: 0.3;">
		<a-entity
			id="train_model"
			gltf-model="#train_model"
			rotation="0 0 0"
			scale="1 1 1">
		</a-entity>

		<a-entity
			id="noface"
			gltf-model="#no-face"
			rotation="0 90 0"
			position="-0.056 0.204 -0.287"
			scale="0.030 0.030 0.030"
			material="opacity: 0.1; transparent: true"
			animation__float="property: position; dir: alternate; dur: 2000; to: -0.056 0.4 -0.287; loop: true; easing: easeInOutSine">
		</a-entity>

		<!-- nav mesh -->
		<a-entity
			id="train-nav-mesh"
			position="3.8 0.89 0"
			geometry="primitive: plane; height: 3; width: 2"
			rotation="-90 0 0"
			data-role="nav-mesh"
			material="color: #00ff00"
			visible="false"></a-entity>
	</a-entity>

	<!-- Train entry portal -->
	<template v-if="isTrainInPosition">
		<a-entity>
			<PortalTeleporter
				label="Enter the Train"
				material="transparent: true ; opacity: 0;"
				@click="startTrain()"
				position="1.530 1.933 -3.457"
				rotation="0 0 0"
				x="-0.4"
				y="1"
				z="-4.8" />
		</a-entity>
	</template>

	<!-- Train restart door -->
	<template v-if="isTrainInSecondPosition">
		<RestartDoor
			id="restart-door"
			label="Restart"
			position="203.922 1.991 -4.850"
			rotation="0 -90 0"
			material="transparent: true ; opacity: 0;"
			x="197"
			y="0.45"
			z="0" />
	</template>

	<a-entity id="train_stop">
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
			position="204 0.475 0"
			scale="0.700 0.700 0.700">
		</a-entity>
	</a-entity>

	<a-entity
		id="diorama"
		gltf-model="#dioramaModel"
		position="150 -350 -40"
		rotation="0 0 0"
		scale="50 50 50"
		animation="property: position; to: 150 3 -40; dur: 45000; easing: easeOutCubic; startEvents: start-moving;">
	</a-entity>

	<!-- Main room navigation mesh  -->
	<a-entity
		id="main-room-nav-mesh"
		geometry="primitive: plane; height: 21.260; width: 30.950"
		position="-10.180 -0.1 7.560"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: #ff0000"
		visible="true"></a-entity>

	<a-entity
		id="train-stop-nav-mesh"
		geometry="primitive: plane; height: 17.800; width: 15"
		position="199.520 -0.1 5.722"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: #ff0000"
		visible="false"></a-entity>
</template>
