function onResize() {
    let bodyWidth = document.body.clientWidth || document.documentElement.clientWidth

    if (bodyWidth > 1280) {
        let a = document.documentElement.style.fontSize = parseInt(100 * bodyWidth / 1280) + 'px'
        console.log(a)
    }
}
if (window.addEventListener) {
    window.addEventListener('resize', onResize)
} else {
    window.attachEvent('resize', onResize)
}
onResize()
