<script setup>
import "../aframe/clickable.js";
import { ref } from "vue";

function refreshPage() {
	window.location.reload();
}

const props = defineProps({
	id: { type: String, default: null },
	label: { type: String, default: "" },
	x: { type: Number, default: 0 },
	y: { type: Number, default: 0 },
	z: { type: Number, default: 0 },
});
const id = ref(props.id);
// if no id is set, generate a random one
if (!id.value) {
	id.value = crypto.getRandomValues(new Uint32Array(1))[0];
}
</script>

<template>
	<a-entity
		:id="`${id}`"
		geometry="primitive: plane; height: 2.23; width: 0.930"
		material="side: double"
		clickable
		@click="refreshPage()"
		:position="`${x} ${y} ${z}`"
		rotation="0 90 0">
		<a-text align="center" :value="label" position="0 1.2 0"></a-text>
	</a-entity>
</template>
