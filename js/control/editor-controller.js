'use strict'

var gCurrLine

function initEditor(imgId) {
    gCurrLine = 0
    const meme = getMeme(imgId)

    initCanvas()
    renderMeme(meme)
}

function onTextInput(val) {
    const meme = setMemeText(val, gCurrLine)
    clearCanvas()
    renderMeme(meme)
}

function onSwichLines() {
    console.log('switching lines..')
}

function onAddLine() {
    console.log('adding line...')
}

function onDeleteLine() {
    console.log('deleting line...')
}

function onSizeChange(val) {
    console.log('changin size...', val)
}

function onAlignChange(val) {
    console.log('changin align...', val)
}

function onFontChange(val) {
    console.log('changing font...', val)
}

function onStrokeChange(val) {
    console.log('changing stroke...', val)
}

function onFillChange(val) {
    console.log('chaging fill...', val)
}