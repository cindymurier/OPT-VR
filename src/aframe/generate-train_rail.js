AFRAME.registerComponent("generate-train_rail", {
	schema: {
		numRails: {
			type: "number",
			default: 50,
		},
	},
	init: function () {
		for (let i = 0; i < this.data.numRails; i++) {
			const rail = document.createElement("a-entity");
			rail.setAttribute("gltf-model", "#rail");
			rail.setAttribute("rotation", "0 90 0");
			rail.setAttribute("position", `${-50 + i * 1.581} -0.802 -4.908`);
			rail.setAttribute("scale", "1 1 1");

			// container.appendChild(rail);
			this.el.appendChild(rail);
		}
	},
});
