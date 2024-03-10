AFRAME.registerComponent("generate-waterlilies", {
	schema: {
		numWaterlilies: { type: "number", default: 20 },
		yPosition: { type: "number", default: 0 }, // Hauteur fixe pour flotter sur l'eau
		minScale: { type: "number", default: 0.5 },
		maxScale: { type: "number", default: 1.5 },
		minX: { type: "number", default: -50 },
		maxX: { type: "number", default: 50 },
		minZ: { type: "number", default: -50 },
		maxZ: { type: "number", default: 50 },
	},
	init: function () {
		for (let i = 0; i < this.data.numWaterlilies; i++) {
			const waterlily = document.createElement("a-entity");
			waterlily.setAttribute("gltf-model", "#waterLilyModel");

			const scale = this.randomBetween(this.data.minScale, this.data.maxScale);
			const positionX = this.randomBetween(this.data.minX, this.data.maxX);
			const positionZ = this.randomBetween(this.data.minZ, this.data.maxZ);

			waterlily.setAttribute(
				"position",
				`${positionX} ${this.data.yPosition} ${positionZ}`
			);
			waterlily.setAttribute("scale", `${scale} ${scale} ${scale}`);

			// Flottement léger sur l'eau
			waterlily.setAttribute("animation", {
				property: "position",
				to: `${positionX} ${this.data.yPosition + 0.05} ${positionZ}`,
				dir: "alternate",
				dur: 8000, // Durée plus longue pour un effet subtil
				loop: true,
				easing: "easeInOutSine",
			});

			this.el.appendChild(waterlily);
		}
	},
	randomBetween: function (min, max) {
		return Math.random() * (max - min) + min;
	},
});
