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

document.body.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight" || e.key === 'd') {
        if (document.querySelector("body > div:nth-child("+(posX+1)+")").classList.contains('wall')) {
            console.log("You can't go through the wall Casper")
        }
        else if (document.querySelector("body > div:nth-child("+(posX+1)+")").classList.contains('border')) {
            console.log("Your papers please")
        }
        else if(document.querySelector("body > div:nth-child("+(posX+1)+")").classList.contains('treasure')){
            posX++
            alert('You have passed level 1')
        }
        else{
            posX++
            document.querySelector("body > div:nth-child("+posX+")").appendChild(balle)
            console.log(e.code)
        }
    }
    else if(e.code === "ArrowLeft" || e.key === 'q'){
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
    else if(e.code === "ArrowUp" || e.key === 'z'){
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
    else if(e.code === "ArrowDown" || e.key === 's'){
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
    // else if(e.key === 'r'){
    //     document.querySelector("body > div:nth-chil")
    // }
})