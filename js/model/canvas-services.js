'use strict'

var gCanvas
var gCtx

function initCanvas() {
    gCanvas = document.querySelector('.meme-canvas')
    gCtx = gCanvas.getContext('2d')
    console.log('initializing canvas...')
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function renderMeme(meme) {
    const {url, lines, lineIdx} = meme
    const {txt, size, align, stroke, fill} = lines[lineIdx]

    const img = new Image()
    img.src = url
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

    gCtx.font = `${size} Ariel`
    gCtx.textAlign = align

    gCtx.strokeStyle = stroke
    gCtx.strokeText(txt, 80, 50)
    gCtx.fillStyle = fill
    gCtx.fillText(txt, 80, 50)
}

function _resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}