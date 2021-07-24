let btns = document.getElementsByClassName('card')
let btn = Array.from(btns)
let solo = document.getElementById('solo')
let duo = document.getElementById('duo')
let enemyChose = ''
let playerChose = ''
solo.addEventListener("click", soloGame)
duo.addEventListener("click", duoGame)
let firstPlayerImg = document.getElementById('firstPlayerImg')
let secondPlayerImg = document.getElementById('secondPlayerImg')
let firstPlayerScore = document.getElementById('firstPlayerScore')
let secondPlayerScore = document.getElementById('secondPlayerScore')
let indicator = document.getElementById('indicator')

function soloGame() {
    enemyChose = Math.floor(Math.random() * (4 - 1) + 1)
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
        btn[i].addEventListener('click', yourChoseSolo)
    }
}

function yourChoseSolo() {
    playerChose = this.innerHTML
    secondPlayerImg.src = 'img/' + this.innerHTML + '.png'
    firstPlayerImg.src = 'img/' + enemyChose + '.png'
    playerChose = this.innerHTML
    if (playerChose == enemyChose) {
    } else {
        switch (playerChose) {
            case 'Rock':
                if (enemyChose == 'Scissors') {
                    indicator.innerHTML = '=>'
                    secondPlayerScore.innerHTML = +secondPlayerScore.innerHTML + 1
                } else {
                    indicator.innerHTML = '<='
                    firstPlayerScore.innerHTML = +firstPlayerScore.innerHTML + 1
                }
                break
            case 'Paper':
                if (enemyChose == 'Rock') {
                    indicator.innerHTML = '=>'
                    secondPlayerScore.innerHTML = +secondPlayerScore.innerHTML + 1
                } else {
                    indicator.innerHTML = '<='
                    firstPlayerScore.innerHTML = +firstPlayerScore.innerHTML + 1
                }
                break
            case 'Scissors':
                if (enemyChose == 'Paper') {
                    indicator.innerHTML = '=>'
                    secondPlayerScore.innerHTML = +secondPlayerScore.innerHTML + 1
                } else {
                    indicator.innerHTML = '<='
                    firstPlayerScore.innerHTML = +firstPlayerScore.innerHTML + 1
                }
                break
        }
    }
    soloGame()
}


//------------------------------------------------//
function duoGame() {
    solo.style.display = 'none'
    duo.style.display = 'none'
    for (i = 0; i < btn.length; i++) {
        btn[i].style.display = 'block'
        btn[i].addEventListener('click', firstPlayerChose)
    }
}

function firstPlayerChose() {
    enemyChose = this.innerHTML
    for (i = 0; i < btn.length; i++) {
        btn[i].removeEventListener('click', firstPlayerChose)
        btn[i].addEventListener('click', secondPlayerChose)
    }
}

function secondPlayerChose() {
    firstPlayerImg.src = 'img/' + enemyChose + '.png'
    playerChose = this.innerHTML
    secondPlayerImg.src = 'img/' + this.innerHTML + '.png'
    if (playerChose == enemyChose) {
        indicator.innerHTML = 'DRAW'
    } else {
        switch (playerChose) {
            case 'Rock':
                if (enemyChose == 'Scissors') {
                    indicator.innerHTML = '=>'
                    secondPlayerScore.innerHTML = +secondPlayerScore.innerHTML + 1
                } else {
                    indicator.innerHTML = '<='
                    firstPlayerScore.innerHTML = +firstPlayerScore.innerHTML + 1
                }
                break
            case 'Paper':
                if (enemyChose == 'Rock') {
                    indicator.innerHTML = '=>'
                    secondPlayerScore.innerHTML = +secondPlayerScore.innerHTML + 1
                } else {
                    indicator.innerHTML = '<='
                    firstPlayerScore.innerHTML = +firstPlayerScore.innerHTML + 1
                }
                break
            case 'Scissors':
                if (enemyChose == 'Paper') {
                    indicator.innerHTML = '=>'
                    secondPlayerScore.innerHTML = +secondPlayerScore.innerHTML + 1
                } else {
                    indicator.innerHTML = '<='
                    firstPlayerScore.innerHTML = +firstPlayerScore.innerHTML + 1
                }
                break
        }
    }
    for (i = 0; i < btn.length; i++) {
        btn[i].removeEventListener('click', secondPlayerChose)
    }
    enemyChose = ''
    playerChose = ''
    duoGame()
}
