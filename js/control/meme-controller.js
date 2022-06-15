'use strict'


function initEditor(image) {
    initCanvas()
    renderImgOnCanvas(image.url)
    renderTextOnCanvas()
}

function onTextChange(val) {
    clearTexFromCanvas()
    renderImgOnCanvas()
    renderTextOnCanvas(val)
}