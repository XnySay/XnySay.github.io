let left = document.querySelector('.button-left')
let right = document.querySelector('.button-right')
let images_1 = document.querySelectorAll('.panel')
let images = document.querySelector('.panel-arrey')

let index = 0
let time
function position() {
    images.style.left = (index * -100) + '%'
}
function add() {
    if (index >= images_1.length-1) {
        index = 0
    } else {
        index++
    }
}

function desc() {
    if(index < 1) {
        index = images_1.length - 1
    } else {
        index--
    }
}

left.addEventListener("click", () => {
    desc()
    position()
    clearInterval(time)
    timer()
})
right.addEventListener("click", () => {
    add()
    position()
    clearInterval(time)
    timer()
})
for (let i = 0; i < images_1.length; i++) {
    min[i].addEventListener("click", () => {
        index = i
        position()
        clearInterval(time)
        timer()
    })
}
timer()