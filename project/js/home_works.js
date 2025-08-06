const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')

const gmailRegExp = /^[a-zA-Z0-9._]+@gmail\.com$/

gmailButton.onclick = () => {
    if (gmailRegExp.test(gmailInput.value.trim())) {
        gmailResult.innerText = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerText = 'ERROR'
        gmailResult.style.color = 'red'
    }
}

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const offsetWidth = parentBlock.clientWidth - childBlock.offsetWidth
const offsetHeight = parentBlock.clientHeight - childBlock.offsetHeight

let direction = 'right'
const speed = 10 

const moveRight = () => {
    requestAnimationFrame(moveRight)

    childBlock.style.left = `${positionX}px`
    childBlock.style.top = `${positionY}px`

    if (direction === 'right') {
        if (positionX < offsetWidth) {
            positionX += speed
        } else {
            direction = 'down'
        }
    } else if (direction === 'down') {
        if (positionY < offsetHeight) {
            positionY += speed
        } else {
            direction = 'left'
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX -= speed
        } else {
            direction = 'up'
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY -= speed
        } else {
            direction = 'right'
        }
    }
}

moveRight()

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')
const display = document.querySelector('#seconds')

let counter = 0
let intervalId = null

startBtn.addEventListener('click', () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      counter++
      display.textContent = counter
    }, 1000)
  }
})

stopBtn.addEventListener('click', () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
})

resetBtn.addEventListener('click', () => {
  clearInterval(intervalId)
  intervalId = null
  counter = 0
  display.textContent = counter
})
