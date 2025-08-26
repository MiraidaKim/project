
// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items') 

let currentIndex = 0

const hideTabContent = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
} 

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}   

hideTabContent()
showTabContent(currentIndex)


tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                currentIndex = tabIndex 
                hideTabContent()
                showTabContent(currentIndex)
            }
        })
    }
}

setInterval(() => {
    currentIndex++
    if (currentIndex >= tabs.length) {
        currentIndex = 0 
    }
    hideTabContent()
    showTabContent(currentIndex)
}, 10000) 



//  CONVERTER 

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const euroInput = document.querySelector('#eur')


const converter = (element, target1, target2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-Type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)

            if (element.id === 'som') {
                target1.value = (element.value / data.usd).toFixed(2)   
                target2.value = (element.value / data.eur).toFixed(2)  
            }
            if (element.id === 'usd') {
                target1.value = (element.value * data.usd).toFixed(2)        
                target2.value = ((element.value * data.usd) / data.eur).toFixed(2) 
            }
            if (element.id === 'eur') {
                target1.value = (element.value * data.eur).toFixed(2)          
                target2.value = ((element.value * data.eur) / data.usd).toFixed(2) 
            }

             if (element.value === '') {
                target1.value = ''
            }
        }
    }
}

converter(somInput, usdInput, euroInput)
converter(usdInput, somInput, euroInput)
converter(euroInput, somInput, usdInput)



// DRY - don't repeat yourself
// KISS - keep it simple, stupid
    




window.onload = () => {
    const btnNext = document.querySelector('.btn_next')
    const btnPrev = document.querySelector('.btn_prev')
    const card = document.querySelector('.card')
    let cardId = 1

    async function loadCard(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const data = await response.json()
            const { title, id: todoId, completed } = data
            const color = completed ? 'green' : 'red'
            card.style.borderColor = color
            card.innerHTML = `
                <p>${title}</p>
                <p style="color: ${color}">${completed}</p>
                <span>${todoId}</span>
            `
        } catch (error) {
            console.log('Ошибка при загрузке карточки:', error)
        }
    }

    btnNext.onclick = () => {
        cardId = cardId >= 200 ? 1 : cardId + 1
        loadCard(cardId)
    }

    btnPrev.onclick = () => {
        cardId = cardId <= 1 ? 200 : cardId - 1
        loadCard(cardId)
    }

    
}
