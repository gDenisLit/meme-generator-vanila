'use strict'

var gCanvas
var gCtx
var gImg


function initCanvas() {
    gCanvas = document.querySelector('.meme-canvas')
    gCtx = gCanvas.getContext('2d')
    console.log('initializing canvas...')
}

function clearTexFromCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function renderImgOnCanvas(url) {
    if (!gImg) {
        gImg = new Image()
        gImg.src = url
    }
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
}

function renderTextOnCanvas(txt='Enter Text Here') {
    gCtx.font = '50px Arial'
    gCtx.strokeText(txt, 80, 50)
    gCtx.fillStyle = 'red'
    gCtx.fillText(txt, 80, 50)
}

function _resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}