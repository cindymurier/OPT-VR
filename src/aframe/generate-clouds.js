AFRAME.registerComponent("generate-clouds", {
	schema: {
		numClouds: { type: "number", default: 20 },
		minHeight: { type: "number", default: 10 },
		maxHeight: { type: "number", default: 20 },
		minScale: { type: "number", default: 1 },
		maxScale: { type: "number", default: 2 },
	},
	init: function () {
		for (let i = 0; i < this.data.numClouds; i++) {
			const cloud = document.createElement("a-entity");
			cloud.setAttribute("gltf-model", "#clouds");

			const height = this.randomBetween(this.data.minHeight, this.data.maxHeight);
			const positionX = this.randomBetween(-50, 250);
			const positionZ = this.randomBetween(-100, 100);
			const scale = this.randomBetween(this.data.minScale, this.data.maxScale);

			cloud.setAttribute("position", `${positionX} ${height} ${positionZ}`);
			cloud.setAttribute("scale", `${scale} ${scale} ${scale}`);
			cloud.setAttribute("rotation", "0 -30 0");
			cloud.setAttribute("animation-mixer", "");

			this.el.appendChild(cloud);
		}
	},
	randomBetween: function (min, max) {
		return Math.random() * (max - min) + min;
	},
});
