
const btn = document.getElementById('mode-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
     btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const popUp = document.getElementById("popUp");

// let val = setTimeout(() => {

// }, 3000);
// let val2 = setInterval(() => {
//     popUp.style.display = "block";

// }, 3000);

setTimeout(() => {
    // clearInterval(val2);
    popUp.style.display = "block";

}, 2000);

function deletePopUp() {
    popUp.style.display = "none";

}