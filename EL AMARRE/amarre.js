function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}
let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoCostco = document.getElementsByClassName("ModoCostco")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom (e.target)});

btnSi.addEventListener('click', function(e) {
    alert('YO FELIZ ♥')
    divModoCostco.style.display = 'block';
    const cancion = new Audio ('img\\modoCostco.mp3');
    cancion.play();
});