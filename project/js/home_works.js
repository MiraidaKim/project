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

const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')

let positionX = 0

function moveRight() {
    const maxPosition = parentBlock.offsetWidth - childBlock.offsetWidth

    if (positionX < maxPosition) {
        positionX += 5
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveRight)
    }
}

moveRight() 
