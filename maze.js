const body = document.querySelector('body');
body.className = 'body';

const multiline = '----------------***********.*--*S.....**.*.T--*****.....*.*--*****.***.*.*--*****.*****.*--*****.*****.*--*****.......*--*****.*******--*.........***--*.******...**--*....********----------------';

for (let i = 0; i < multiline.length; i++) {
    const tiles = document.createElement('div');
    tiles.className = 'tile';
    body.appendChild(tiles);

    if (multiline[i] === '*') {
        tiles.className = 'tile wall';
    } else if (multiline[i] === '.') {
        tiles.className = 'tile path';
    } else if (multiline[i] === 'S') {
        tiles.className = 'tile start';
    } else if (multiline[i] === 'T') {
        tiles.className = 'tile treasure';
    } else if (multiline[i] === '-'){
        tiles.className = 'tile border';
    }
}

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("body > div:nth-child(34)").appendChild(balle);

let posX = 34;

document.body.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
        if (document.querySelector("body > div:nth-child("+(posX+1)+")").classList.contains('wall')) {
            console.log("You can't go through the wall Casper")
        }
        else if (document.querySelector("body > div:nth-child("+(posX+1)+")").classList.contains('border')) {
            console.log("Your papers please")
        }
        else{
            posX++
            document.querySelector("body > div:nth-child("+posX+")").appendChild(balle)
            console.log(e.code)
        }
    }
    if(e.code === "ArrowLeft"){
        if(document.querySelector("body > div:nth-child("+(posX-1)+")").classList.contains('wall')){
            console.log("You can't go through the wall Casper")
        }
        else if (document.querySelector("body > div:nth-child("+(posX-1)+")").classList.contains('border')) {
            console.log("Your papers please")
        }
        else{
            posX--
            document.querySelector("body > div:nth-child("+posX+")").appendChild(balle)
            console.log(e.code)
        }
    }
    if(e.code === "ArrowUp"){
        if(document.querySelector("body > div:nth-child("+(posX-15)+")").classList.contains('wall')){
            console.log("You can't go through the wall Casper")
        }
        else if (document.querySelector("body > div:nth-child("+(posX-15)+")").classList.contains('border')) {
            console.log("Your papers please")
        }
        else{
            posX-=15
            document.querySelector("body > div:nth-child("+posX+")").appendChild(balle)
            console.log(e.code)
        }
    }
    if(e.code === "ArrowDown"){
        if(document.querySelector("body > div:nth-child("+(posX+15)+")").classList.contains('wall')){
            console.log("You can't go through the wall Casper")
        }
        else if (document.querySelector("body > div:nth-child("+(posX+15)+")").classList.contains('border')) {
            console.log("Your papers please")
        }
        else{
            posX+=15
            document.querySelector("body > div:nth-child("+posX+")").appendChild(balle)
            console.log(e.code)
        }
    }
})