const signUpdata = document.getElementById('signUp');
const signIndata = document.getElementById('signIn');
const containers = document.getElementById('containers');

signUpdata.addEventListener('click', () => {
	containers.classList.add("right-panel-active");
});

signIndata.addEventListener('click', () => {
	containers .classList.remove("right-panel-active");
});