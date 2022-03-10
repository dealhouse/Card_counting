const deckList = [
    {
        name: `blueAce`, 
        image: `cardImages/Blue/ace.png`,
        value: `A`

    }, 
    {
        name: `blueTwo`, 
        image: `cardImages/Blue/two.png`,
        value: 2
    },

    {
        name: `blueThree`, 
        image: `cardImages/Blue/three.png`, 
        value: 3
    }, 

    {
        name: `blueFour`, 
        image: `cardImages/Blue/four.png`, 
        value: 4
    }, 

    {
        name: `blueFive`, 
        image: `cardImages/Blue/five.png`, 
        value: 5
    },

    {
        name: `blueSix`, 
        image: `cardImages/Blue/six.png`, 
        value: 6

    }, 

    {
        name: `blueSeven`, 
        image: `cardImages/Blue/seven.png`, 
        value: 7

    }, 

    {
        name: `blueEight`, 
        image: `cardImages/Blue/eight.png`, 
        value: 8
    }, 

    {
        name: `blueNine`, 
        image: `cardImages/Blue/nine.png`, 
        value: 9

    }, 

    {
        name: `blueTen`, 
        image: `cardImages/Blue/ten.png`, 
        value: 10

    }, 

    {
        name: `blueJack`, 
        image: `cardImages/Blue/jack.png`, 
        value: 10
    }, 

    {
        name: `blueQueen`, 
        image: `cardImages/Blue/queen.png`, 
        value: 10
    }, 

    {
        name: `blueKing`, 
        image: `cardImages/Blue/king.png`, 
        value: 10 
    }, 

    {
        name: `greenAce`, 
        image: `cardImages/Green/ace.png`, 
        value: `A`
    }, 
    {
        name: `greenTwo`, 
        image: `cardImages/Green/two.png`, 
        value: 2
    },

    {
        name: `greenThree`, 
        image: `cardImages/Green/three.png`, 
        value: 3
    }, 

    {
        name: `greenFour`, 
        image: `cardImages/Green/four.png`, 
        value: 4
    }, 

    {
        name: `greenFive`, 
        image: `cardImages/Green/five.png`, 
        value: 5
    },

    {
        name: `greenSix`, 
        image: `cardImages/Green/six.png`, 
        value: 6
    }, 

    {
        name: `greenSeven`, 
        image: `cardImages/Green/seven.png`, 
        value: 7
    }, 

    {
        name: `greenEight`, 
        image: `cardImages/Green/eight.png`, 
        value: 8
    }, 

    {
        name: `greenNine`, 
        image: `cardImages/Green/nine.png`, 
        value: 9
    }, 

    {
        name: `greenTen`, 
        image: `cardImages/Green/ten.png`, 
        value: 10
    }, 

    {
        name: `greenJack`, 
        image: `cardImages/Green/jack.png`, 
        value: 10
    }, 

    {
        name: `greenQueen`, 
        image: `cardImages/Green/queen.png`, 
        value: 10
    }, 

    {
        name: `greenKing`, 
        image: `cardImages/Green/king.png`, 
        value: 10
    }, 

    {
        name: `redAce`, 
        image: `cardImages/Red/ace.png`, 
        value: `A`
    }, 
    {
        name: `redTwo`, 
        image: `cardImages/Red/two.png`, 
        value: 2
    },

    {
        name: `redThree`, 
        image: `cardImages/Red/three.png`, 
        value: 3
    }, 

    {
        name: `redFour`, 
        image: `cardImages/Red/four.png`, 
        value: 4
    }, 

    {
        name: `redFive`, 
        image: `cardImages/Red/five.png`, 
        value: 5
    },

    {
        name: `redSix`, 
        image: `cardImages/Red/six.png`, 
        value: 6
    }, 

    {
        name: `redSeven`, 
        image: `cardImages/Red/seven.png`, 
        value: 7
    }, 

    {
        name: `redEight`, 
        image: `cardImages/Red/eight.png`, 
        value: 8
    }, 

    {
        name: `redNine`, 
        image: `cardImages/Red/nine.png`, 
        value: 9
    }, 

    {
        name: `redTen`, 
        image: `cardImages/Red/ten.png`, 
        value: 10
    }, 

    {
        name: `redJack`, 
        image: `cardImages/Red/jack.png`, 
        value: 10
    }, 

    {
        name: `redQueen`, 
        image: `cardImages/Red/queen.png`, 
        value: 10
    }, 

    {
        name: `redKing`, 
        image: `cardImages/Red/king.png`, 
        value: 10
    }, 

    {
        name: `yellowAce`, 
        image: `cardImages/Yellow/ace.png`, 
        value: `A`
    }, 
    {
        name: `yellowTwo`, 
        image: `cardImages/Yellow/two.png`, 
        value: 2
    },

    {
        name: `yellowThree`, 
        image: `cardImages/Yellow/three.png`, 
        value: 3 
    }, 

    {
        name: `yellowFour`, 
        image: `cardImages/Yellow/four.png`, 
        value: 4
    }, 

    {
        name: `yellowFive`, 
        image: `cardImages/Yellow/five.png`, 
        value: 5
    },

    {
        name: `yellowSix`, 
        image: `cardImages/Yellow/six.png`, 
        value: 6
    }, 

    {
        name: `yellowSeven`, 
        image: `cardImages/Yellow/seven.png`, 
        value: 7
    }, 

    {
        name: `yellowEight`, 
        image: `cardImages/Yellow/eight.png`, 
        value: 8
    }, 

    {
        name: `yellowNine`, 
        image: `cardImages/Yellow/nine.png`, 
        value: 9
    }, 

    {
        name: `yellowTen`, 
        image: `cardImages/Yellow/ten.png`, 
        value: 10
    }, 

    {
        name: `yellowJack`, 
        image: `cardImages/Yellow/jack.png`, 
        value: 10
    }, 

    {
        name: `yellowQueen`, 
        image: `cardImages/Yellow/queen.png`, 
        value: 10
    }, 

    {
        name: `yellowKing`, 
        image: `cardImages/Yellow/king.png`, 
        value: 10
    }
]
let deckCounter = 0
let playerHoldValue = 0
let dealerHoldValue = 0
let newArray = []
deckBtn = document.querySelector(`#deck`)
holdBtn = document.querySelector(`#hold`)
playBtn = document.querySelector(`#play`)
replayBtn = document.querySelector(`#replay`)
let gameActive = null
let playerCount = document.querySelector(`#player-count`)
let dealerCount = document.querySelector(`#dealer-count`)
let winsNum = document.querySelector(`#winsNum`)
let lossesNum = document.querySelector(`#lossesNum`)
let tiesNum = document.querySelector(`#tiesNum`)

function winCheck() {
    if (playerHoldValue > 21) {
        loseScreen()
    }
    else if (dealerHoldValue > 21) {
        winScreen()
    }
    else if (playerHoldValue > dealerHoldValue && gameActive === false) {
        winScreen()
    }
    else if (playerHoldValue === dealerHoldValue && gameActive === false) {
        tieScreen()
    }
    else if (dealerHoldValue > playerHoldValue && gameActive === false) {
        loseScreen()
    }
}

function winScreen() {
    holdBtn.disabled = true
    holdBtn.style.opacity = 0
    deckBtn.disabled = true
    deckBtn.style.opacity = 0
    let youWin = document.createElement(`h1`)
    youWin.innerText = `You won!`
    youWin.setAttribute(`class`, `win-screen`)
    document.querySelector(`#display`).prepend(youWin)
    winsNum.innerText = `${(parseInt(winsNum.textContent) + 1)}`
    replayBtn.disabled = false
    replayBtn.style.opacity = 1
}

function loseScreen() {
    holdBtn.disabled = true
    holdBtn.style.opacity = 0
    deckBtn.disabled = true
    deckBtn.style.opacity = 0
    let youLose = document.createElement(`h1`)
    youLose.innerText = `You lost.`
    youLose.setAttribute(`class`, `win-screen`)
    document.querySelector(`#display`).prepend(youLose)
    lossesNum.innerText = `${(parseInt(lossesNum.textContent) + 1)}`
    replayBtn.disabled = false
    replayBtn.style.opacity = 1
}

function tieScreen() {
    holdBtn.disabled = true
    holdBtn.style.opacity = 0
    deckBtn.disabled = true
    deckBtn.style.opacity = 0
    let youTie = document.createElement(`h1`)
    youTie.innerText = `You tied.`
    youTie.setAttribute(`class`, `win-screen`)
    document.querySelector(`#display`).prepend(youTie)
    tiesNum.innerText = `${(parseInt(tiesNum.textContent) + 1)}`
    replayBtn.disabled = false
    replayBtn.style.opacity = 1
}


function pickACard(){
    let newImg = document.createElement(`img`)
    newImg.src = `${newArray[deckCounter].image}`
    newImg.setAttribute(`data-id`, `${newArray[deckCounter].value}`)
    document.querySelector(`#player-card-area`).appendChild(newImg)
    gsap.from(newImg, {duration: 1, opacity: 0, x: 100})
    deckCounter += 1
    total(`player`)
    winCheck()
    playerCount.innerText = playerHoldValue
    
}
function hold() {
    deckBtn.disabled = true
    dealerTurn()
    document.querySelector(`#cardback`).remove()
    gameActive = false
    winCheck()
    dealerCount.innerText = dealerHoldValue
}

function displayCardBack() {
    let newImg = document.createElement(`img`)
    newImg.src = `cardImages/cardback.png`
    newImg.setAttribute(`id`, `cardback`)
    newImg.setAttribute(`data-id`, 0)
    document.querySelector(`#dealer-card-area`).appendChild(newImg)
    gsap.from(newImg, {duration: 1, opacity: 0, x: -100})
}

function dealerPick(t) {
    let newImg = document.createElement(`img`)
    newImg.src = `${newArray[deckCounter].image}`
    newImg.setAttribute(`data-id`, `${newArray[deckCounter].value}`)
    document.querySelector(`#dealer-card-area`).appendChild(newImg)
    gsap.from(newImg, {duration: 1, opacity: 0, x: -100, delay: (t/4)})
    deckCounter += 1
    total(`dealer`)}
    dealerCount.innerText = dealerHoldValue


function dealerTurn() {
    let dCards = 0
    while (dealerHoldValue < 17) {
    dCards ++
    dealerPick(dCards)
}
} 


//Using the Fisher-Yates algorithm to shuffle 
function shuffle(array) {
    for (let i=(array.length -1); i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    return array

}

playBtn.addEventListener(`click`, () => {
    newArray = (shuffle(deckList))
    deckBtn.addEventListener(`click`, pickACard)
    holdBtn.addEventListener(`click`, hold)
    for (let i=0; i<2; i++) {
        pickACard()
        
    }
    dealerPick()
    displayCardBack()
    playBtn.remove()
    deckBtn.style.opacity = 1
    holdBtn.style.opacity = 1
    gameActive = true
    winCheck()
    playerCount.innerText = playerHoldValue
    dealerCount.innerText = dealerHoldValue
})

replayBtn.addEventListener(`click`, () => {
    newArray = (shuffle(deckList))
    holdBtn.disabled = false
    holdBtn.style.opacity = 1
    deckBtn.disabled = false
    deckBtn.style.opacity = 1
    replayBtn.disabled = true
    replayBtn.style.opacity = 0
    document.querySelector(`.win-screen`).remove()
    document.querySelector(`#player-card-area`).innerHTML = `<span>Your hand</span>`
    document.querySelector(`#dealer-card-area`).innerHTML = `<span>Dealer's hand</span>`
    gameActive = true
    deckCounter = 0
    playerHoldValue = 0
    dealerHoldValue = 0
    playerCount.innerText = playerHoldValue
    dealerCount.innerText = dealerHoldValue
    for (let i=0; i<2; i++) {
        pickACard()
        
    }
    dealerPick()
    displayCardBack()
    dealerCount.innerText = dealerHoldValue
})

function total(cardArea) {
    let currentCards = document.querySelectorAll(`#${cardArea}-card-area img`)
    const valueArr = []
    for (let i=0; i<currentCards.length; i++) {
        valueArr.push(parseInt(currentCards[i].dataset.id))
    }
    console.log(valueArr)
    let totalCount = 0
    let nums = valueArr.filter((num) => {
        return (isNaN(num)) === false 
    })
    console.log(valueArr)
    console.log(nums)
    for (let i=0; i<nums.length; i++){
    totalCount += nums[i]
}
    let aces = valueArr.filter((ace) => {
        return (isNaN(ace)) === true
    })
    for (let i=0; i<aces.length; i++) {
        if ((totalCount + 11) > 21) {
            totalCount += 1
        }
        else if ((totalCount + 1) > 21){
            totalCount += 1
        }
        else {
            totalCount += 11
        }
    }
    console.log(totalCount)
    if (cardArea === `player`) {
        playerHoldValue = totalCount}
    else {
        dealerHoldValue = totalCount
    }
    console.log(playerHoldValue)
    console.log(dealerHoldValue)
    console.log(aces)
    }


