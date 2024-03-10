import { copyPosition } from "../utils/aframe.js";

AFRAME.registerComponent("bind-position", {
	schema: {
		target: { type: "selector" },
	},

	tick: function () {
		var targetPosition = this.data.target.getAttribute("position").clone(); // Cloner pour éviter la modification directe de l'objet
		targetPosition.x += 2.5;
		targetPosition.y += 1; // Ajouter 1 à la position y
		targetPosition.z += 0.4;
		this.el.setAttribute("position", targetPosition);
	},
});
