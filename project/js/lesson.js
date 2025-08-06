

// Регулярные выражения - Regular Expressions

// flags - флаги:
// i - ignore case - игнорировать регистр
// g - global - глобальный поиск
// m - multiline - многострочный режим
// y - sticky - поиск с текущей позиции, то есть ищет с конца 

// const name = prompt('Введите имя')

// const regExp = /n/ig

// console.log(name.match(regExp) )

// digits - цифры

// const numbers = '1234567890'

// // const regExp = /[^0-9a-zA-Z_]|[0-9a-zA-Z_]/g
// // const regExp = /w|\W/g
// const regExp = /\S/g

// console.log(numbers.match(regExp, '*') )
// // console.log(numbers.match(regExp))

// recursion - рекурсия

// let num = 0

// const count = () => {
//     num++
//     console.log(num)
//     if (num < 500) {
//        requestAnimationFrame(count) //FPS - frames per second (60 кадров в секунду)
//     }
// }

// count()

// PHONE BLOCK

const phoneInput = document.querySelector('#phone-input')
const phoneButton = document.querySelector('#phone-button')
const phoneResult = document.querySelector('#phone-result') 

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
 
phoneButton.onlick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'ERROR'
        phoneResult.style.color = 'red'
    }
}  

