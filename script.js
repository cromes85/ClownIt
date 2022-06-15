var klaxon = document.getElementById("pad-56");
var tambour = document.getElementById("pad-57");
var snap = document.getElementById("pad-48");
var blip = document.getElementById("pad-45");




function playKlaxon() {
    const soundKlaxon = new Audio('sounds/klaxon1.wav');   
    soundKlaxon.play();
}
function playTambour() {
    const soundTambour = new Audio('sounds/tambour.wav');   
    soundTambour.play();
}
function playPercu() {
    const soundPercu = new Audio('sounds/MUSCPerc.wav');   
    soundPercu.play();
}
function playPunch() {
    const soundPunch = new Audio('http://www.slspencer.com/Sounds/Three%20Stooges/CJSH.wav');
    soundPunch.play();
}
function playFilm() {
    const soundIndiana = new Audio('sounds/Indiana-Jones.mp3');
    soundIndiana.play();
}
function playFouet() {
    const soundFouet = new Audio('https://www.cjoint.com/doc/17_02/GBci3fpY43h_Coup-de-fouet-bruitage-.mp3');
    soundFouet.play();
}
function playFBoyard() {
    const soundFBoyar = new Audio('https://www.cjoint.com/doc/20_06/JFhrNP5nJ5d_musique-fort-boyard.mp3');
    soundFBoyar.play();
}
function playCryDead() {
    const soundCryDead = new Audio('sounds/crie.wav');
    soundCryDead.play();
}
