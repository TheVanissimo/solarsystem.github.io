import './canvas.js'

const items = document.querySelectorAll('.transfer-full .transfer-item')
items.forEach(item =>
    item.addEventListener('click', () =>
        item.classList.toggle('transfer-show')
    )
)
