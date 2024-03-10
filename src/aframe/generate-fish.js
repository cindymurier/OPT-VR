AFRAME.registerComponent("generate-fish", {
	schema: {
		numFish: { type: "number", default: 10 },
		minHeight: { type: "number", default: 0 },
		maxHeight: { type: "number", default: 5 },
		minScale: { type: "number", default: 1 },
		maxScale: { type: "number", default: 1.5 },
		minX: { type: "number", default: -50 },
		maxX: { type: "number", default: 50 },
		minZ: { type: "number", default: -50 },
		maxZ: { type: "number", default: 50 },
	},
	init: function () {
		for (let i = 0; i < this.data.numFish; i++) {
			const fish = document.createElement("a-entity");
			fish.setAttribute("gltf-model", "#fishModel");

			const scale = this.randomBetween(this.data.minScale, this.data.maxScale);
			const startPositionX = this.randomBetween(this.data.minX, this.data.maxX);
			const startPositionZ = this.randomBetween(this.data.minZ, this.data.maxZ);
			const endPositionX = startPositionX + 1; // The fish moves forward by 1 meter
			const randomJumpHeight = this.randomBetween(
				this.data.minHeight,
				this.data.maxHeight
			); // Random jump height

			fish.setAttribute(
				"position",
				`${startPositionX} ${this.data.minHeight} ${startPositionZ}`
			);
			fish.setAttribute("scale", `${scale} ${scale} ${scale}`);
			fish.setAttribute("rotation", "-0 -90 0");

			// Jumping animation with forward movement and random jump height
			fish.setAttribute("animation__jump", {
				property: "position",
				to: `${endPositionX} ${randomJumpHeight} ${startPositionZ}`, // Use random jump height
				dir: "alternate",
				dur: 2000, // Duration of one jump
				loop: true,
				easing: "easeOutQuad",
			});

			// Diving back into the water
			fish.setAttribute("animation__dive", {
				property: "position",
				startEvents: "animationcomplete__jump",
				to: `${endPositionX + 1} ${this.data.minHeight} ${startPositionZ}`,
				dur: 3000, // Slightly longer duration for the dive
				easing: "easeInQuad",
			});

			// Rotation animation to simulate a natural jump
			fish.setAttribute("animation__rotation", {
				property: "rotation",
				to: "-360 -90 0",
				dur: 5000, // Match jump duration for synchronization
				loop: true,
				easing: "easeInOutQuad",
			});

			this.el.appendChild(fish);
		}
	},
	randomBetween: function (min, max) {
		return Math.random() * (max - min) + min;
	},
});
