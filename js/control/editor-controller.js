'use strict'

var gCurrLine
var gLinesCount

function initEditor(imgId) {
    gLinesCount = 2
    
    initCanvas()
    const meme = getMeme(imgId)
    gCurrLine = meme.lines[0].id
    renderMeme(meme, gCurrLine)
    setTextAreaValue(meme.lines[gCurrLine].txt)
}

function onTextInput(val) {
    const meme = setMemeText(val, gCurrLine)
    renderMeme(meme, gCurrLine)
}

function getCurrLine() {
    return gCurrLine    
}

function setCurrLine(idx) {
    gCurrLine = idx
    const meme = getMeme()
    const memeTxt = (meme.lines.length < 2)? 
        meme.lines[0].txt : meme.lines[gCurrLine].txt

    renderMeme(meme, gCurrLine)
    setTextAreaValue(memeTxt)
}

function onAddLine() {
    const meme = addNewLine()
    const {lines} = meme
    gCurrLine = (lines[lines.length -1].id)
    renderMeme(meme, gCurrLine )
}

function onDeleteLine() {
    const meme = getMeme()
    if (!meme.lines.length) return

    const newMeme = deleteLine(gCurrLine)
    gCurrLine = newMeme.lines[0].id
    renderMeme(newMeme, gCurrLine)
}

function onSizeChange(val) {
    changeFontSize(val, gCurrLine)

    const newMeme = getMeme()
    renderMeme(newMeme, gCurrLine)
}

function onAlignChange(val) {
    changeTextAlign(val, gCurrLine)
    const newMeme = getMeme()
    renderMeme(newMeme, gCurrLine)
}

function onFontChange(val) {
    changeTextFont(val, gCurrLine)
    const newMeme = getMeme()
    renderMeme(newMeme, gCurrLine)
}

function onStrokeChange(val) {
    changeStrokeStyle(val, gCurrLine)
    const newMeme = getMeme()
    renderMeme(newMeme, gCurrLine)
}

function onFillChange(val) {
    changeFillStyle(val, gCurrLine)
    const newMeme = getMeme()
    renderMeme(newMeme, gCurrLine)
}

function onDownLoadCanvas(elLink) {
    const meme = getMeme()
    renderMeme(meme, -1)
    const data = getDataUrl()
    elLink.href = data
    elLink.download = 'Your Meme'
}




function setTextAreaValue(txt = 'Enter Text Here') {
    document.querySelector('.txt-edit').value = txt
}

