const level2 = '-------------------------**********************--*..S.................*--********************.*--*....................*--*.********************--*...................T*-------------------------';

let demarrer = true // constant booléenne pour désactiver le fait de pouvoir appuyer deux fois sur Enter

document.body.addEventListener('keydown', function (e) {
    if (e.key === "Enter" && demarrer === true) {
        demarrer = false

        main.textContent = '' //Permet d'effacer le premier labyrinthe
        main.className = 'level2'; // Assigner une nouvelle classe au main pour générer le deuxième labyrinthe
        // boucle pour génerer le deuxième labyrinthe
        for (let i = 0; i < level2.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level2[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level2[i] === '.') {
                tiles.className = 'tile path';
            } else if (level2[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level2[i] === 'T') {
                tiles.className = 'tile treasure';
            } else if (level2[i] === '-') {
                tiles.className = 'tile border';
            }
        }

        document.querySelector("main > div:nth-child(53)").appendChild(balle);

        let posX = 53;
        let gamepad = true


        document.body.addEventListener("keydown", function (e) {
            // Aller à droite
            if (e.key === "ArrowRight" && gamepad === true || e.key === 'd' && gamepad === true) {

                if (document.querySelector("main>div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
                    console.log("You can't go through the wall Casper")

                } else if (document.querySelector("main>div:nth-child(" + (posX + 1) + ")").classList.contains('border')) {
                    console.log("Your papers please")

                } else if (document.querySelector("main>div:nth-child(" + (posX + 1) + ")").classList.contains('treasure')) {
                    posX = 26 // définir la position du player pour le level 3
                    const p = document.createElement('p')
                    main.appendChild(p)
                    p.textContent = "You have passed level 2, press Space to go to level 3"
                    p.className = 'level2tolevel3'
                    gamepad = false
                } else {
                    posX++
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    console.log(e.code)
                }
                // Aller à gauche
            } else if (e.code === "ArrowLeft" && gamepad === true || e.key === 'q' && gamepad === true) {
                if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
                    console.log("You can't go through the wall Casper")
                } else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('border')) {
                    console.log("Your papers please")
                } else {
                    posX--
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    console.log(e.code)
                }
                // Aller en haut
            } else if (e.code === "ArrowUp" && gamepad === true || e.key === 'z' && gamepad === true) {
                if (document.querySelector("main > div:nth-child(" + (posX - 24) + ")").classList.contains('wall')) {
                    console.log("You can't go through the wall Casper")
                } else if (document.querySelector("main > div:nth-child(" + (posX - 24) + ")").classList.contains('border')) {
                    console.log("Your papers please")
                } else {
                    posX -= 24
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    console.log(e.code)
                }
                // Aller en bas
            } else if (e.code === "ArrowDown" && gamepad === true || e.key === 's' && gamepad === true) {
                if (document.querySelector("main > div:nth-child(" + (posX + 24) + ")").classList.contains('wall')) {
                    console.log("You can't go through the wall Casper")
                } else if (document.querySelector("main > div:nth-child(" + (posX + 24) + ")").classList.contains('border')) {
                    console.log("Your papers please")
                } else {
                    posX += 24
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    console.log(e.code)
                }
            }
        })
    }
})