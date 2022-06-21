'use strict'

function renderGallry(images) {
    const strHtml = images.map(image => {
        return `<img
                    class="gallery-item"
                    id="${image.id}"
                    src="${image.url}"
                    onclick="onImageSelect('${image.id}')"
    >`})
    document.querySelector('.images-wrapper').innerHTML = strHtml.join('')
}

function renderMemeEditor() {
    document.querySelector('.meme-gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'flex'
}

function updateEditorInputs(line) {
    const {txt, font, stroke, fill} = line
    document.querySelector('.txt-edit').value = txt
    document.querySelector('.txt-font').value = font
    document.querySelector('.txt-storke').value = stroke
    document.querySelector('.txt-fill').value = fill
}

function getElCanvas() {
    return document.querySelector('.meme-canvas')
}

function getImgSize(imgId) {
    const elImg = document.getElementById(`${imgId}`)   
    return {
        w: elImg.naturalWidth,
        h: elImg.naturalHeight
    }
}

function getElCanvasContainer() {
    return document.querySelector('.canvas-container')
}