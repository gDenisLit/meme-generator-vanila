'use strict'

function initGallery() {
    const images = getImages()
    renderGallry(images)

    const elImgObjects = getElImgObjects()
    setImgSizes(elImgObjects)
}

function onImageSelect(imgId) {
    initMemeEditor(imgId)
    renderMemeEditor()
}

