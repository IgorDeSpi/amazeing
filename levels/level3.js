const level3 = `-----------********--****S***--****.***--****.***--****.***--*......*--*.****.*--*..***.*--*..***.*--**.*****--*T.*****--********-----------`
let annule = true
document.body.addEventListener('keypress', function (e) {
        if (e.key === " " && annule === true) {
            annule = false
            main.textContent = ''
            main.className = 'level3';
            for (let i = 0; i < level3.length; i++) {
                const tiles = document.createElement('div');
                tiles.className = 'tile';
                main.appendChild(tiles);

                if (level3[i] === '*') {
                    tiles.className = 'tile wall';
                } else if (level3[i] === '.') {
                    tiles.className = 'tile path';
                } else if (level3[i] === 'S') {
                    tiles.className = 'tile start';
                } else if (level3[i] === 'T') {
                    tiles.className = 'tile treasure';
                } else if (level3[i] === '-') {
                    tiles.className = 'tile border';
                }
            }
            const balle = document.createElement('div');
            balle.className = 'player';

            document.querySelector("main > div:nth-child(26)").appendChild(balle);

            let posX = 26;

            document.body.addEventListener("keydown", function (e) {
                if (e.key === "ArrowRight" || e.key === 'd') {
                    if (document.querySelector("main>div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
                        console.log("You can't go through the wall Casper")
                    } else if (document.querySelector("main>div:nth-child(" + (posX + 1) + ")").classList.contains('border')) {
                        console.log("Your papers please")
                    } else {
                        posX++
                        document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                        console.log(e.code)
                    }
                } else if (e.code === "ArrowLeft" || e.key === 'q') {
                    if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
                        console.log("You can't go through the wall Casper")
                    } else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('border')) {
                        console.log("Your papers please")
                    } else if (document.querySelector("main>div:nth-child(" + (posX - 1) + ")").classList.contains('treasure')) {
                        posX++
                        alert('You have passed all the levels, congrats')
                        balle.className = ''
                        main.textContent = ''
                        body.className ='body'
                    } else {
                        posX--
                        document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                        console.log(e.code)
                    }
                } else if (e.code === "ArrowUp" || e.key === 'z') {
                    if (document.querySelector("main > div:nth-child(" + (posX - 10) + ")").classList.contains('wall')) {
                        console.log("You can't go through the wall Casper")
                    } else if (document.querySelector("main > div:nth-child(" + (posX - 10) + ")").classList.contains('border')) {
                        console.log("Your papers please")
                    } else {
                        posX -= 10
                        document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                        console.log(e.code)
                    }
                } else if (e.code === "ArrowDown" || e.key === 's') {
                    if (document.querySelector("main > div:nth-child(" + (posX + 10) + ")").classList.contains('wall')) {
                        console.log("You can't go through the wall Casper")
                    } else if (document.querySelector("main > div:nth-child(" + (posX + 10) + ")").classList.contains('border')) {
                        console.log("Your papers please")
                    } else {
                        posX += 10
                        document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                        console.log(e.code)
                    }
                }
            })
        }
    
})