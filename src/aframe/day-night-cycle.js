AFRAME.registerComponent("day-night-cycle", {
	schema: {
		duration: { type: "number", default: 24000 },
		colors: {
			default: [
				"#87CEEB", // Sky blue
				"#87CEEB", // Sky blue
				"#87CEEB", // Sky blue
				"#87CEEB", // Sky blue
				"#D99282", // Pink
				"#F2AE72", // Orange
				"#8A2BE2", // Violet
				"#001D3D", // Night blue
			],
		},
	},
	init: function () {
		this.elapsedTime = 0;
		this.cycleComplete = false; // Indicator for cycle completion
		this.el.sceneEl.addEventListener("start-cycle", () => this.startCycle());
	},
	tick: function (time, timeDelta) {
		if (!this.cycleStarted || this.cycleComplete) {
			return; // Stop updating if the cycle hasn't started or is completed
		}

		this.elapsedTime += timeDelta;
		const cycleDuration = this.data.duration / (this.data.colors.length - 1);

		if (this.elapsedTime >= this.data.duration) {
			this.elapsedTime = this.data.duration;
			this.cycleComplete = true; // Mark the cycle as complete
		}

		let cycleFraction = this.elapsedTime / this.data.duration;
		this.colorIndex = Math.floor(cycleFraction * (this.data.colors.length - 1));
		cycleFraction =
			cycleFraction * (this.data.colors.length - 1) - this.colorIndex;

		const startColor = this.data.colors[this.colorIndex];
		const endColor =
			this.data.colors[Math.min(this.colorIndex + 1, this.data.colors.length - 1)];
		const currentColor = this.lerpColor(startColor, endColor, cycleFraction);

		const sceneEl = this.el.sceneEl;
		if (sceneEl) {
			sceneEl.setAttribute("background", "color", currentColor);
			sceneEl.setAttribute("fog", `color: ${currentColor}`);
		}
	},
	lerpColor: function (color1, color2, fraction) {
		const c1 = new THREE.Color(color1);
		const c2 = new THREE.Color(color2);
		c1.lerp(c2, fraction);
		return "#" + c1.getHexString();
	},
	startCycle: function () {
		this.cycleStarted = true;
	},
});
