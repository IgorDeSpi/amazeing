const level3 = `-----------********--****S***--****.***--****.***--****.***--*......*--*.****.*--*..***.*--*..***.*--**.*****--*T.*****--********-----------`
let annule = true // Constante booléenne pour empêcher de pouvoir regénérer non stop le level 3


document.body.addEventListener('keypress', function (e) {
    if (e.key === " " && annule === true) {
        annule = false
        main.textContent = '' // Effacer le labyrinthe 2
        main.className = 'level3'; // Donner une nouvelle classe pour générer le level 3
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
            // Aller à droite
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
                // Aller à gauche
            } else if (e.code === "ArrowLeft" || e.key === 'q') {
                if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
                    console.log("You can't go through the wall Casper")
                } else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('border')) {
                    console.log("Your papers please")
                } else if (document.querySelector("main>div:nth-child(" + (posX - 1) + ")").classList.contains('treasure')) {
                    posX++
                    balle.className = '' // Effacer le player
                    main.textContent = '' // Effacer le level 3
                    explanations.textContent = '' // Effacer les explications de jeu
                    explanations.className = ''
                    body.className = 'body' // Assigner la classe body au body pour obtenir l'écran de fin
                    const p = document.createElement('p')
                    body.appendChild(p)
                    p.textContent = "You have passed all the levels, congrats"
                    p.className = 'finish'
                } else {
                    posX--
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    console.log(e.code)
                }
                // Aller en haut
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
                // Aller en bas
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