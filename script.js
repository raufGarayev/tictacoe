

const myCell = document.querySelectorAll('button')
let newhone = null
const theBody = document.querySelector('body')
const header = document.getElementById('header')

let theName = prompt('Adınız?', '')

header.innerText = `TicTacToe for ${theName}`

let winner = false
let compWinner = false


myCell.forEach(btn => {
    btn.addEventListener('click', startGame);
 });

function startGame(e) {

    console.log(winner)
    console.log(compWinner)


    if(winner)
        return

    const clickedButton = e.target

    if(clickedButton.innerText == "") {
        clickedButton.innerHTML = "<h1>X</h1>"
    }
    else
        return  

    if(myCell[0].innerText == "X" && myCell[1].innerText == "X" && myCell[2].innerText == "X")
        winner = true
    else if(myCell[0].innerText == "X" && myCell[3].innerText == "X" && myCell[6].innerText == "X")
        winner = true
    else if(myCell[0].innerText == "X" && myCell[4].innerText == "X" && myCell[8].innerText == "X")
        winner = true
    else if(myCell[1].innerText == "X" && myCell[4].innerText == "X" && myCell[7].innerText == "X")
        winner = true
    else if(myCell[2].innerText == "X" && myCell[5].innerText == "X" && myCell[8].innerText == "X")
        winner = true
    else if(myCell[6].innerText == "X" && myCell[7].innerText == "X" && myCell[8].innerText == "X")
        winner = true
    else if(myCell[2].innerText == "X" && myCell[4].innerText == "X" && myCell[6].innerText == "X")
        winner = true
    else if(myCell[3].innerText == "X" && myCell[4].innerText == "X" && myCell[5].innerText == "X")
        winner = true


    if(winner) {
        newhone = document.createElement('div')
        newhone.classList.add('winmessage')
        newhone.innerHTML = `<h1>Təbriklər, ${theName}! Siz qalib gəldiniz!</h1> <button id='reset'>Yenə oyna</button>`
        theBody.appendChild(newhone)

        const resetBtn = document.getElementById('reset')

        resetBtn.addEventListener('click', restartGame)
    }
    else
        addingO()
}

function addingO() {
    if(!compWinner) {
        let rndmCell = Math.floor(Math.random() * 9)

        const rndmPlace = document.getElementById(rndmCell)

        if(rndmPlace.innerText == "")
            rndmPlace.innerHTML = "<h1>O</h1>"
        else if(checkingAllCells() != 0 && !winner) {
            newhone = document.createElement('div')
            newhone.classList.add('winmessage')
            newhone.innerHTML = `<h1>BƏRABƏRƏ</h1> <button id='reset'>Yenə oyna</button>`
            theBody.appendChild(newhone)

            let resetBtn = document.getElementById('reset')

            resetBtn.addEventListener('click', restartGame)
        }
        else if(!winner && !compWinner)
            addingO()
        else
            alert("HALOOOO")

        if(myCell[0].innerText == "O" && myCell[1].innerText == "O" && myCell[2].innerText == "O")
            compWinner = true
        else if(myCell[0].innerText == "O" && myCell[3].innerText == "O" && myCell[6].innerText == "O")
            compWinner = true
        else if(myCell[0].innerText == "O" && myCell[4].innerText == "O" && myCell[8].innerText == "O")
            compWinner = true
        else if(myCell[1].innerText == "O" && myCell[4].innerText == "O" && myCell[7].innerText == "O")
            compWinner = true
        else if(myCell[2].innerText == "O" && myCell[5].innerText == "O" && myCell[8].innerText == "O")
            compWinner = true
        else if(myCell[6].innerText == "O" && myCell[7].innerText == "O" && myCell[8].innerText == "O")
            compWinner = true
        else if(myCell[2].innerText == "O" && myCell[4].innerText == "O" && myCell[6].innerText == "O")
            compWinner = true
        else if(myCell[3].innerText == "O" && myCell[4].innerText == "O" && myCell[5].innerText == "O")
            compWinner = true


        if(compWinner) {
            newhone = document.createElement('div')
            newhone.classList.add('winmessage')
            newhone.innerHTML = `<h1>${theName} sən udma ehtimalı 10% olan sistemə uduzdun</h1> <button id='reset'>Yenə oyna</button>`
            theBody.appendChild(newhone)

            let resetBtn = document.getElementById('reset')

            resetBtn.addEventListener('click', restartGame)
            return
        }
    }
    else
        return

}

function restartGame() {
    theBody.removeChild(newhone)
    
    for (let index = 0; index < myCell.length; index++) {
        myCell[index].innerText = ""
        winner = false
        compWinner= false
    }

    
}

function checkingAllCells() {
    for (let i = 0; i < myCell.length; i++) {
        
        if(myCell[i].innerText == "")
            return 0
    }
}