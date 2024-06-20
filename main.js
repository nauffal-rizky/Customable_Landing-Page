document.addEventListener("DOMContentLoaded", () => {
	// WEB CHANGER TOGGLE
	const webChanger = document.querySelector(".web-change-toggle");

	const webChangerBtn = webChanger.querySelector("i");
	const webChangerBtnHeight = webChangerBtn.getBoundingClientRect().height;
	const webChangerHeight = webChanger
		.querySelector(".web-change-content")
		.getBoundingClientRect().height;

	webChanger.style.height = `${webChangerBtnHeight}px`;
	window.addEventListener("click", (e) => {
		if (e.target === webChangerBtn && !webChanger.classList.contains("drop")) {
			webChanger.style.height = `calc(${webChangerBtnHeight}px + ${webChangerHeight}px)`;
			webChanger.classList.add("drop");
		} else if (
			e.target === webChangerBtn &&
			webChanger.classList.contains("drop")
		) {
			webChanger.style.height = `${webChangerBtnHeight}px`;
			webChanger.classList.remove("drop");
		}
	});
});
