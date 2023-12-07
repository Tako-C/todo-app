const colorRandom = document.querySelector('button')
console.log(colorRandom);
const CheckP = document.getElementById('Ruk')
console.log(CheckP.childNodes);
colorRandom.addEventListener('click',
function(e) {
    e.preventDefault
    const color = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"]
    const ranColorIndex = Math.floor(Math.random()*color.length);
    const ranColor = color[ranColorIndex];
    console.log(ranColor);
    localStorage.setItem('RandomColor',ranColor)
    document.body.style.backgroundColor = ranColor
});