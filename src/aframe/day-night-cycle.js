AFRAME.registerComponent("day-night-cycle", {
	schema: {
		duration: { type: "number", default: 24000 },
		colors: {
			default: [
				"#87CEEB", // Bleu Ciel
				"#87CEEB", // Bleu Ciel
				"#87CEEB", // Bleu Ciel
				"#D99282", // Rose
				"#F2AE72", // Orange
				"#8A2BE2", // Violet
				"#001D3D", // Bleu Nuit
			],
		},
	},
	init: function () {
		this.elapsedTime = 0;
		this.cycleComplete = false; // Ajout d'un indicateur de fin de cycle
	},
	tick: function (time, timeDelta) {
		if (this.cycleComplete) {
			// Vérifier si le cycle est terminé
			return; // Arrêter la mise à jour si le cycle est terminé
		}

		this.elapsedTime += timeDelta;
		const cycleDuration = this.data.duration / (this.data.colors.length - 1);

		// Assurez-vous que le cycle s'arrête après la dernière transition de couleur
		if (this.elapsedTime >= this.data.duration) {
			this.elapsedTime = this.data.duration;
			this.cycleComplete = true; // Marquer le cycle comme complet
		}

		let cycleFraction = this.elapsedTime / this.data.duration;

		// Calculer l'indice de couleur actuel sans bouclage
		this.colorIndex = Math.floor(cycleFraction * (this.data.colors.length - 1));
		cycleFraction =
			cycleFraction * (this.data.colors.length - 1) - this.colorIndex;

		const startColor = this.data.colors[this.colorIndex];
		const endColor =
			this.data.colors[Math.min(this.colorIndex + 1, this.data.colors.length - 1)];

		const currentColor = this.lerpColor(startColor, endColor, cycleFraction);

		// Appliquer la couleur interpolée au fond et au brouillard
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
});
