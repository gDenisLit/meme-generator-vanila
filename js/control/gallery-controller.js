'use strict'

function initGellery() {
    renderGallry()
}

function renderGallry() {
    const images = getImages()
    const strHtml = getStrHtmlForImages(images)
    document.querySelector('.images-wrapper').innerHTML = strHtml
}

function onImageSelect(imgId) {
    initEditor(imgId)
    document.querySelector('.meme-gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'block'
}

