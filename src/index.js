import './less/index.less'

// Your code goes here!

/* 1- load */

window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO'
}

/* 2- copy */

window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
})

/* 3- click */

document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

/* 4- dblclick */
document.body.addEventListener('dblclick', event => {
    event.target.innerHTML = ''
})

/* 5- keydown */
window.addEventListener('keydown', event => {
    if(event.key == 6) {
        document.body.innerHTML = '<h1>rigadon</h1>'
    }
})

/* 6- mousemove */
document.body.addEventListener('mousemove', event => {
    const {clientX, clientY} = event
    console.log(`mouse is at ${clientY}`)
})
/* 7- mouseenter */
/* 8- mouseleave */
const destinations = document.querySelector('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}