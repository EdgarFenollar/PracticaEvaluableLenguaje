var tiradas1 = 12;
var tiradas2 = 12;
var punt1 = 0;
var punt2 = 0;
let contTiradas1;
let contTiradas2;
var sinDados = 'Este jugador no tiene mas dados restantes';
var sinTiradas = 'Este jugador no tiene mas tiradas restantes';
var sinDadosb1;
var sinTiradasb1;
var sinDadosb2;
var sinTiradasb2;
var resultado = document.getElementById('resultado');

function dadoRandom(num) {
    let random;
    var dados1 = 0;
    var dados2 = 0;
    var dado1 = document.getElementById('dado1');
    var dado2 = document.getElementById('dado2');
    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2');
    var imagenDado = document.createElement('img');
    dados1 = parseInt(document.getElementById('player1').value);
    dados2 = parseInt(document.getElementById('player2').value);
    console.log(dados1);
    console.log(dados2);

    if (sinTiradasb1 == false && sinTiradasb2 == false){
        if (punt1 > punt2){
            resultado.innerHTML = 'El ganador es: Jugador 1'
        } else if (punt1 < punt2){
            resultado.innerHTML = 'El ganador es: Jugador 2'
        } else {
            resultado.innerHTML = 'Es un empate'
        }
        
    }
    
    if (sinDadosb1 == false && sinDadosb2 == false){
        if (punt1 > punt2){
            resultado.innerHTML = 'El ganador es: Jugador 1'
        } else if (punt1 < punt2){
            resultado.innerHTML = 'El ganador es: Jugador 2'
        } else {
            resultado.innerHTML = 'Es un empate'
        }
    }

    var imagenesDados = [
        '../img/d1.png',
        '../img/d2.png',
        '../img/d3.png',
        '../img/d4.png',
        '../img/d5.png',
        '../img/d6.png'
    ];

    if (num == 1) {
        if (contTiradas1 >= 3){
            dado1.innerHTML = sinTiradas;
            sinTiradasb1 = false;
        }else if (tiradas1 <= 0) {
            dado1.innerHTML = sinDados;
            sinDadosb1 = false;
        } else {
            for (let index = 0; index < dados1; index++) {
                random = Math.floor(Math.random() * 6);
                imagenDado.src = imagenesDados[random];
                dado1.appendChild(imagenDado).style.width = '85px';
                punt1 = punt1 + random + 1;
                tiradas1 = tiradas1 - dados1;
                contTiradas1++;
            }
        }
    }
    
    if (num == 2) {
        if (contTiradas2 >= 3){
            dado2.innerHTML = sinTiradas;
            sinDadosb1 = false;
        }else if (tiradas2 <= 0) {
            dado2.innerHTML = sinDados;
            sinDadosb2 = false;
        } else {
            for (let index = 0; index < dados2; index++) {
                random = Math.floor(Math.random() * 6);
                imagenDado.src = imagenesDados[random];
                dado2.appendChild(imagenDado).style.width = '85px';
                punt2 = punt2 + random + 1;
                tiradas2 = tiradas2 - dados2;
                contTiradas1++;
            }
        }
    }

    p1.innerHTML = 'Puntuacion: ' + punt1;
    p2.innerHTML = 'Puntuacion: ' + punt2;
    console.log(punt1);
    console.log(punt2);
    dados1 = 0;
    dados2 = 0;
};
