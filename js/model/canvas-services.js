'use strict'
var gCanvasSize
var gCanvas
var gCtx
var gDefaultLinePos

function initCanvas() {
    gCanvas = document.querySelector('.meme-canvas')
    gCtx = gCanvas.getContext('2d')
    _setCanvasSize()

    gDefaultLinePos = _setDefaultPositions()
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function renderMeme(meme, lineIdx) {
    const {url, lines} = meme
    drawImageOnCanvas(url, gCtx)
    drawTextOnCanvas(lines, lineIdx, gCtx)
}

// function drawBoxOutline(x, y) {
//     gCtx.beginPath()
//     gCtx.rect(x, y, gShapeSize, gShapeSize)

//     gCtx.fillStyle = gCurrColor
//     gCtx.fillRect(x, y, gShapeSize, gShapeSize)

//     gCtx.strokeStyle = gCurrColor
//     gCtx.stroke()
// }

function _setCanvasSize() {
    gCanvasSize = {h: 500, w: 500}
    gCanvas.width = gCanvasSize.w
    gCanvas.height = gCanvasSize.h
}

function _resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function _setDefaultPositions() {
    const {w, h} = {w: gCanvas.width, h: gCanvas.height}
    return [
        {x: w * 0.2, y: h * 0.15},
        {x: w * 0.2, y: h * 0.8},
        {x: w * 0.2, y: h * 0.5}
    ]
}