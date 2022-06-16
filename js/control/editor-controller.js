'use strict'

var gCurrLine
var gLinesCount

function initEditor(imgId) {
    gCurrLine = 0
    gLinesCount = 1
    
    initCanvas()
    const meme = getMeme(imgId)
    renderMeme(meme, gCurrLine)
}

function onTextInput(val) {
    const editedMeme = setMemeText(val, gCurrLine)
    clearCanvas()
    renderMeme(editedMeme)
}

function onSwichLines() {
    if (gCurrLine === 0) gCurrLine++
    else if (gCurrLine === gLinesCount) gCurrLine--
}

function onAddLine() {
    if (gLinesCount < 3) gLinesCount++
    else return

    const meme = addNewLine()
    clearCanvas()
    renderMeme(meme)
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