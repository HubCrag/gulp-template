const burger = document.querySelector('.burger')
const menu = document.querySelector('nav')

const disScroll = () => {
    let pagePosition = window.scrollY
    document.body.classList.add('dis--scroll')
    document.body.dataset.position = pagePosition
    document.body.style.top = - pagePosition + "px"
}

const enScroll = () => {
    let pagePosition =  parseInt(document.body.dataset.position, 10)
    document.body.style.top = 'auto'
    document.body.classList.remove('dis--scroll')
    window.scrollTo({
        top: pagePosition,
        left: 0
    })
    document.body.removeAttribute('data-position')
}

burger.addEventListener('click', (e) => {
    burger.classList.toggle('is-active')
    menu.classList.toggle('is-active')
    if(burger.classList.contains('is-active')) {
        disScroll()
    } else {
        enScroll()
    }
})

