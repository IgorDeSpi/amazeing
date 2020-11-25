const body = document.querySelector('body');

const explanations = document.createElement('div');
explanations.className = 'explanations';
body.appendChild(explanations);
explanations.textContent = 'To move you can use the directional arrows or Z Q S D';

const main = document.createElement('main');
main.className = 'level1';

body.appendChild(main);

const level1 =
    `----------------***********.*--*S.....**.*.T--*****.....*.*--*****.***.*.*--*****.*****.*--*****.*****.*--*****.......*--*****.*******--*.........***--*.******...**--*....********----------------`;
// Boucle pour génerer le premier labyrinthe
for (let i = 0; i < level1.length; i++) {
    const tiles = document.createElement('div');
    tiles.className = 'tile';
    main.appendChild(tiles);

    if (level1[i] === '*') {
        tiles.className = 'tile wall';
    } else if (level1[i] === '.') {
        tiles.className = 'tile path';
    } else if (level1[i] === 'S') {
        tiles.className = 'tile start';
    } else if (level1[i] === 'T') {
        tiles.className = 'tile treasure';
    } else if (level1[i] === '-') {
        tiles.className = 'tile border';
    }
}
// On définit le player
const balle = document.createElement('div');
balle.className = 'player';
// On définit la position de player sur le premier labyrinthe
document.querySelector("main > div:nth-child(33)").appendChild(balle);

let posX = 33;
let joystick = true //Je crée du booléen pour désactiver en suite les touches pour se déplacer pour qu'elles ne s'activent pas dans les labyrinthes suivants
document.body.addEventListener("keydown", function (e) {
    // Pour aller à droite
    if (e.key === "ArrowRight" && joystick === true || e.key === 'd' && joystick === true) {
        if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
            console.log("You can't go through the wall Casper")
        } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('border')) {
            console.log("Your papers please")
        } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('treasure')) {
            // Je définis que lorsque je rencontre le trésor je renvoie le player à la position du start du prochain labyrinthe
            posX = 53
            const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "You have passed level 1, press Enter to go to level 2"
            p.className = 'level2tolevel3'
            joystick = false
        } else {
            posX++
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            console.log(e.code)
        }
        // Pour aller à gaucher
    } else if (e.code === "ArrowLeft" && joystick === true || e.key === 'q' && joystick === true) {
        if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
            console.log("You can't go through the wall Casper")
        } else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('border')) {
            console.log("Your papers please")
        } else {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            console.log(e.code)
        }
        // Pour aller en haut
    } else if (e.code === "ArrowUp" && joystick === true || e.key === 'z' && joystick === true) {
        if (document.querySelector("main > div:nth-child(" + (posX - 15) + ")").classList.contains('wall')) {
            console.log("You can't go through the wall Casper")
        } else if (document.querySelector("main > div:nth-child(" + (posX - 15) + ")").classList.contains('border')) {
            console.log("Your papers please")
        } else {
            posX -= 15
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            console.log(e.code)
        }
        // Pour aller en bas
    } else if (e.code === "ArrowDown" && joystick === true || e.key === 's' && joystick === true) {
        if (document.querySelector("main > div:nth-child(" + (posX + 15) + ")").classList.contains('wall')) {
            console.log("You can't go through the wall Casper")
        } else if (document.querySelector("main > div:nth-child(" + (posX + 15) + ")").classList.contains('border')) {
            console.log("Your papers please")
        } else {
            posX += 15
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            console.log(e.code)
        }
    }
})