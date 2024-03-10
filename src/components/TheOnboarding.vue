<script setup>
import { ref } from "vue";

defineProps({
	loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
	showOnboarding.value = false;
	if (
		AFRAME.utils.device.checkHeadsetConnected() &&
		!AFRAME.utils.device.isMobile()
	) {
		document.querySelector("a-scene").enterVR();
	}
	document.querySelector("a-scene").emit("enter-scene");
	document.querySelector("#train").emit("arrive-train");
	document.querySelector("#day-night-cycle").emit("start-cycle");
	document.querySelector("#diorama").emit("start-moving");
}
</script>

<template>
	<div id="onboarding" v-if="showOnboarding">
		<div>
			<h1>A-Frame + Vite + Vue Boilerplate</h1>
			<p v-if="!loaded">loading...</p>
			<button v-if="loaded" @click="enterScene()">Enter scene</button>
			<div class="licences">
				<section>
					<h4>Movement modes support</h4>
					<ul>
						<li>
							Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
							control (Drag and drop)
						</li>
						<li>
							Mobile – 1x Finger touch to go forward + 2x Fingers touch to go backward
							+ Gaze cursor for click
						</li>
						<li>
							VR Headset – AR/VR walk + Teleport (Grip for grab and laser for click) +
							Gaze cursor for click
						</li>
					</ul>
				</section>
				<section>
					<h4>Note</h4>
					<ul>
						<li>Please do not move within the train to ensure the best experience</li>
					</ul>
				</section>
				<dl>
					<dt>
						<i>Included</i>
					</dt>
					<dt>
						<a href="https://github.com/c-frame/aframe-extras" target="_blank"
							>aframe-extras controls and animation-mixer</a
						>
					</dt>
					<dd>
						<a
							href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE"
							target="_blank"
							>MIT License</a
						>
					</dd>

					<dt>
						<a href="https://github.com/c-frame/physx" target="_blank"
							>aframe physx</a
						>
					</dt>
					<dd>
						<a
							href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE"
							target="_blank"
							>MIT License</a
						>
					</dd>

					<dt>
						<a href="https://github.com/jure/aframe-blink-controls/" target="_blank"
							>aframe-blink-controls</a
						>
					</dt>
					<dd>
						<a
							href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE"
							target="_blank"
							>MIT License</a
						>
					</dd>

					<dt>
						<a
							href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
							target="_blank"
							>simple-navmesh-constraint</a
						>
					</dt>
					<dd>By Ada Rose Cannon under MIT License</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/rail-minecraft-e5a71540d31940408366252c7c7c55df"
							target="_blank"
							>Rail Minecraft</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/JDanielHE" target="_blank">JDanielHE</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/train-station-74538d566a794e8ea86c72646bee5597"
							target="_blank"
							>train-station</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/madexc" target="_blank">madexc</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/vending-machine-5b9cf13565c5475497d8e56d7473c97c"
							target="_blank"
							>Vending Machine</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/l0y" target="_blank">晴路卡</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/bench-minecraft-b594dc66811c4a8baf2cd5ccd6768530"
							target="_blank"
							>Bench [Minecraft]</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/sedona1029" target="_blank">sedona1029</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/cd810-motor-train-121922992c4c44c9a121a40c82c79382"
							target="_blank"
							>CD810 motor train</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/continentialvoxels" target="_blank"
							>voxellation</a
						>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/minecraft-onsen-00316db3b52a4ed99b3f7b0afd8f3c59"
							target="_blank"
							>Minecraft Onsen</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/fangzhangmnm" target="_blank"
							>fangzhangmnm</a
						>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/cloud-e2e3d3b273994e58a4d61ef554f61207"
							target="_blank"
							>Cloud</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/mamickabee" target="_blank">mamickabee</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/kaonashi-chihirovoxel-2167b40a86b04621b39d30c60c0d08b9"
							target="_blank"
							>Kaonashi & chihiro【Voxel】</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/adiobrick" target="_blank">adiobrick</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/humphead-fish-1279401697a1468e91c307cc52765d3c"
							target="_blank"
							>Humphead Fish</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/CoolPixelpro" target="_blank"
							>CoolPixelpro</a
						>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/origami-water-lilies-b02aeabe3e0b461cb214c90e5a6b3b75"
							target="_blank"
							>Origami - Water Lilies</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/Clonk" target="_blank">Clonk</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/spirited-away-diorama-jack-henderson-aga208-af157b89b72043e4850f9cbfc2db9822"
							target="_blank"
							>Spirited Away Diorama - Jack Henderson AGA208</a
						>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/JackVanH3D" target="_blank">JackVanH3D</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
							>CC BY 4.0</a
						>
					</dd>

					<dt>
						<a
							href="https://opengameart.org/content/beach-ocean-waves"
							target="_blank"
							>Beach Ocean Waves</a
						>
					</dt>
					<dd>
						by
						<a href="https://freesound.org/people/jasinski/" target="_blank"
							>jasinski</a
						>
					</dd>

					<dt>
						<a
							href="https://pixabay.com/sound-effects/train-railroad-traffic-sound-8002/"
							target="_blank"
							>Train - Railroad - Traffic Sound</a
						>
					</dt>
					<dd>
						by
						<a href="https://pixabay.com/users/juliush-3921568/" target="_blank"
							>JuliusH</a
						>
					</dd>

					<dt>
						<a
							href="https://opengameart.org/content/unreleased-game-music-pack"
							target="_blank"
							>Unreleased Game Music Pack, Cafofo - MUSIC - Contemplation 3</a
						>
					</dt>
					<dd>
						by
						<a href="https://opengameart.org/users/estudiocafofo" target="_blank"
							>estudiocafofo</a
						>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<style scoped>
h1 {
	font-size: 1.5rem;
}
a {
	color: #eee;
	text-decoration: none;
}
.licences {
	margin: 2rem 0;
	font-size: 1rem;
	text-align: left;
}
.licences dt {
	padding-top: 0.75rem;
	font-size: 0.9rem;
	font-weight: bold;
}
.licences dd {
	margin-left: 0;
	font-size: 0.8rem;
}

#onboarding {
	position: absolute;
	top: 0;
	left: 0;
	background-color: #333;
	color: #ccc;
	width: 100vw;
	height: 100vh;
	padding: 1rem;
	font-family: monospace;
	z-index: 10000;
	overflow: auto;
}
#onboarding > * {
	margin: 0 auto;
	max-width: 50rem;
	width: calc(100vw - 10rem);
	text-align: center;
	border-radius: 0.3rem;
	padding: 1rem;
	font-size: 1.3rem;
}
#onboarding button {
	font-size: 1.3rem;
	padding: 0.5rem 1rem;
	border-radius: 0.3rem;
	background-color: white;
	color: black;
	border: none;
	cursor: pointer;
}
</style>
#onboarding li { #onboarding li { font-size: 1rem; text-align: left; }
