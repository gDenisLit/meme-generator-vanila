'use strict'

var gCurrLine
var gLinesCount

function initEditor(imgId) {
    gCurrLine = 0
    gLinesCount = 1
    
    initCanvas()
    const meme = getMeme(imgId)
    renderMeme(meme, gCurrLine)
    setTextAreaValue(meme.lines[gCurrLine].txt)
}

function onTextInput(val) {
    const meme = setMemeText(val, gCurrLine)
    renderMeme(meme, gCurrLine)
}

function onSwichLines() {
    if (gCurrLine === 0) gCurrLine++
    else if (gCurrLine === gLinesCount) gCurrLine--

    const meme = getMeme()
    renderMeme(meme, gCurrLine)
    setTextAreaValue(meme.lines[gCurrLine].txt)
}

function getCurrLine() {
    return gCurrLine
}

function setCurrLine(idx) {
    gCurrLine = idx
    const meme = getMeme()
    renderMeme(meme, gCurrLine)
}
function onAddLine() {
    if (gLinesCount < 3) gLinesCount++
    else return

    const meme = addNewLine()
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

function setTextAreaValue(txt) {
    document.querySelector('.txt-edit').value = txt
}