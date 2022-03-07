const deckList = [
    {
        name: `blueAce`, 
        image: `cardImages/Blue/ace.png`

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
deckBtn = document.querySelector(`#deck`)
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



deckBtn.addEventListener(`click`, () => {
    let newArray = (shuffle(deckList))
    let newImg = document.createElement(`img`)
    newImg.src = `${newArray[deckCounter].image}`
    document.querySelector(`#test`).appendChild(newImg)
    deckCounter += 1

})
