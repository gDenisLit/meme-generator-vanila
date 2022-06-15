'use strict'

function initGellery(){
    renderGallry()
}

function renderGallry() {
    const images = getImages() 
    const strHtml = getStrHtmlForImages(images) 
    document.querySelector('.images-wrapper').innerHTML = strHtml
}

function onImageSelect(imgId) {
    const image = getImageById(imgId)
    initEditor(image)
    document.querySelector('.choose-memes').style.display = 'none'
    document.querySelector('.edit-memes').style.display = 'block'

}

