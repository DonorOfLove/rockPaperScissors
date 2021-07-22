let btns = document.getElementsByClassName('card')
let btn = Array.from(btns)
let solo = document.getElementById('solo')
let duo = document.getElementById('duo')
let enemyChose
let playerChose
solo.addEventListener("click", soloGame)
duo.addEventListener("click", duoGame)

function soloGame() {
    enemyChose = Math.round(Math.random() * (3 - 1) + 1)
    switch (enemyChose) {
        case 1:
            enemyChose = 'Rock'
            break
        case 2:
            enemyChose = 'Paper'
            break
        case 3:
            enemyChose = 'Scissors'
            break

    }
    solo.style.display = 'none'
    duo.style.display = 'none'
    for (i = 0; i < btn.length; i++) {
        btn[i].style.display = 'block'
        btn[i].addEventListener('click', yourChose)

    }
}

function duoGame() {
    solo.style.display = 'none'
    duo.style.display = 'none'

    for (i = 0; i < btn.length; i++) {
        btn[i].style.display = 'block'
        btn[i].addEventListener('click', secPlayerChose)

        setTimeout(btn[i].removeEventListener('click', secPlayerChose), 5000)

        setTimeout(btn[i].addEventListener('click', yourChose), 5000)
    }
}

function secPlayerChose() {
    enemyChose = this.innerHTML
    console.log('1')
}

function yourChose() {
    playerChose = this.innerHTML
    console.log(playerChose)
    if (playerChose == enemyChose) {
        alert('draw')
    } else {
        switch (playerChose) {
            case 'Rock':
                if (enemyChose == 'Scissors') {
                    alert('You win! Enemy chose: ' + enemyChose)
                } else (alert('You lose. Enemy chose: ' + enemyChose))
                break
            case 'Paper':
                if (enemyChose == 'Rock')
                    alert('You win! Enemy chose: ' + enemyChose)
                else
                    (alert('You lose. Enemy chose: ' + enemyChose))
                break
            case 'Scissors':
                if (enemyChose == 'Paper')
                    alert('You win! Enemy chose: ' + enemyChose)
                else
                    (alert('You lose. Enemy chose: ' + enemyChose))
                break
        }
    }
}
