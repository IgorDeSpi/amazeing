const body = document.querySelector('body');

const main = document.createElement('main');
main.className = 'level1';

body.appendChild(main);

const level1 =
    `----------------***********.*--*S.....**.*.T--*****.....*.*--*****.***.*.*--*****.*****.*--*****.*****.*--*****.......*--*****.*******--*.........***--*.******...**--*....********----------------`;

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

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(33)").appendChild(balle);

let posX = 33;
let joystick = true
document.body.addEventListener("keydown", function (e) {
    // Pour aller à droite
if (e.key === "ArrowRight" && joystick === true|| e.key === 'd' && joystick === true) {
    if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
        console.log("You can't go through the wall Casper")
    } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('border')) {
        console.log("Your papers please")
    } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('treasure')) {
        posX = 53
        alert('You have passed level 1, press Enter to go to level 2')
        joystick = false
    } else {
        posX++
        document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
        console.log(e.code)
    }
    // Pour aller à gaucher
} else if (e.code === "ArrowLeft" && joystick === true|| e.key === 'q' && joystick === true) {
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
} else if (e.code === "ArrowUp" && joystick === true|| e.key === 'z' && joystick === true) {
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
} else if (e.code === "ArrowDown" && joystick === true|| e.key === 's' && joystick === true) {
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