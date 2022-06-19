'use strict'

function renderGallry(images) {
    var strHtml = ''
    images.map(image => { strHtml+=
        `<img
            class="gallery-item"
            id="${image.id}"
            src="${image.url}"
            onclick="onImageSelect('${image.id}')"
        >`
    })
    document.querySelector('.images-wrapper').innerHTML = strHtml
}

// function getElImgObjects() {
//     const elImgs = document.querySelectorAll('img')
//     const imgObjects = []
//     elImgs.forEach(elImg => {
//         imgObjects.push({
//             id: elImg.id,
//             w: elImg.naturalWidth,
//             h: elImg.naturalHeight
//         })
//     })
//     return imgObjects
// }

function renderMemeEditor() {
    document.querySelector('.meme-gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'flex'
}

function updateTextArea(txt) {
    document.querySelector('.txt-edit').value = txt
}

function updateFontPicker(font) {
    document.querySelector('.txt-font').value = font
}

function updateStrokePicker(color) {
    document.querySelector('.txt-storke').value = color
}

function updateFillPicker(color) {
    document.querySelector('.txt-fill').value = color
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