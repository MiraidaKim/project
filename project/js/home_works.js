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


// characters.json
const charactersList = document.querySelector('.characters-list');

const request = new XMLHttpRequest();
request.open('GET', '../data/characters.json'); 
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    if (request.status === 200) {
        const characters = JSON.parse(request.response);
        charactersList.innerHTML = ''; 

        characters.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('character-card');

            card.innerHTML = `
                <div class="character-photo">
                    <img src="${person.person_photo}" alt="${person.name}">
                </div>
                <h3>${person.name}</h3>
                <p>Возраст: ${person.age}</p>
                <p>Роль: ${person.role}</p>
            `;

            charactersList.appendChild(card);
        });
    } 
};



// bio.json
const bioRequest = new XMLHttpRequest();
bioRequest.open('GET', '../data/bio.json');
bioRequest.setRequestHeader('Content-type', 'application/json');
bioRequest.send();

bioRequest.onload = function () {
    if (bioRequest.status === 200) {
        const bio = JSON.parse(bioRequest.response);
        console.log(bio);
    }
};


//  Феч запрос 


async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('Ошибка при загрузке постов:', error)
    }
}

getPosts()



