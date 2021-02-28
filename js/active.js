const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const container = document.querySelector(".box");;

signInBtn.addEventListener("click", () => {
	container.classList.add("rotate-active");
	container.classList.remove("reverse-active");
});
signUpBtn.addEventListener("click", () => {
	container.classList.add("reverse-active");
	container.classList.remove("rotate-active");
});