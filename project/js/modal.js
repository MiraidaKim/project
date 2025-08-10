// NODAL
const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('#btn-get')
const closeModalBtn = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

openModalBtn.onclick = openModal
closeModalBtn.onclick = closeModal

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

// Автоматическое открытие через 10 секунд
setTimeout(openModal, 10000)

// Функция для открытия модалки при скролле в конец страницы
const showModalOnScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        openModal()
        // удаляем обработчик, чтобы больше не вызывалось
        window.removeEventListener('scroll', showModalOnScroll)
    }
}

// Добавляем обработчик события скролла
window.addEventListener('scroll', showModalOnScroll)
