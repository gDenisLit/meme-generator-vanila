'use strict'

function initGallery() {
    const images = getImages()
    renderGallry(images)
    // calcImgSizes()
}

function calcImgSizes() {
    const elImgObjects = getElImgObjects()
    setImgSizes(elImgObjects)
}

function onImageSelect(imgId) {
    initMemeEditor(imgId)
    renderMemeEditor()
}

function onShowSavedMemes() {
    console.log('showing saving memes...')
}

function onGenerateRandomMem() {
    const randomMeme = generateRandomMeme()
    renderMemeEditor()
    initCanvas(randomMeme)
}

function onSetFilterByWords(val) {
    getFilteredImages(val)
}


