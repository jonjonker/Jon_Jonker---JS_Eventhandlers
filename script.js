const bodycolor = document.querySelector(".blue-background");

const button = document.querySelector('#mybutton')
const button2 = document.querySelector('#mybutton2')

button.addEventListener('click', function () { alert('Button is clicked'); });

const toggleBodyBg = () => {
    bodycolor.classList.toggle("red-background");
}
button2.addEventListener("click", toggleBodyBg);
