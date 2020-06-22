let toggleS = document.getElementById("show")
let toggleH = document.getElementById("hide")
let inputPassword = document.getElementById("input-password")
let inputPasswordC = document.getElementById("input-password-confirm")

function toggle () {
	if (inputPassword.type === "text") {
		inputPassword.setAttribute("type", "password")
		inputPasswordC.setAttribute("type", "password")
		toggleH.classList.add("hide")
		toggleS.classList.remove("hide")
	} else {
		inputPassword.setAttribute("type", "text")
		inputPasswordC.setAttribute("type", "text")
		toggleH.classList.remove("hide")
		toggleS.classList.add("hide")
	}
}