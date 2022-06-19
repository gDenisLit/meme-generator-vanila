'use strict'

function initMemeEditor(imgId) {
    const meme = getMeme(imgId)
    initCanvas(meme)
}

function updateCanvas() {
    const newMeme = getMeme()
    renderMeme(newMeme)
}

function onTextInput(val) {
    const currLineId = getCurrLineId()
    updateLinesProp(val, currLineId, 'txt')
    updateCanvas()
}

function onSwichLines(lineId) {
    const totalLineCount = getLinesCount()
    switchCurrLine(totalLineCount, lineId)
    if (!totalLineCount) {
        updateCanvas()
        return
    }
    const currLineId = getCurrLineId()
    const {txt, font, stroke, fill} = getLine(currLineId)

    updateTextArea(txt)
    updateFontPicker(font)
    updateStrokePicker(stroke)
    updateFillPicker(fill)
    updateCanvas()
}

function onAddLine() {
    const newLineId = addLine()
    onSwichLines(newLineId)
}

function onDeleteLine() {
    const currLineId = getCurrLineId()
    deleteLine(currLineId)
    onSwichLines()
}

function onSizeChange(val) {
    const currLineId = getCurrLineId()
    updateLinesProp(val, currLineId, 'txtSize')
    updateCanvas()
}

function onAlignChange(val) {
    const currLineId = getCurrLineId()
    resetCanvasAlign(currLineId, val)
    updateLinesProp(val, currLineId, 'align')
    updateCanvas()
}

function onFontChange(val) {
    const currLineId = getCurrLineId()
    updateLinesProp(val, currLineId, 'font')
    updateCanvas()
}

function onStrokeChange(val) {
    const currLineId = getCurrLineId()
    updateLinesProp(val, currLineId, 'stroke')
    updateCanvas()
}

function onFillChange(val) {
    const currLineId = getCurrLineId()
    updateLinesProp(val, currLineId, 'fill')
    updateCanvas()
}

function onDownLoadCanvas(elLink) {
    const newMeme = getMeme()
    renderMeme(newMeme, 0)
    const data = getDataUrl()
    elLink.href = data
    elLink.download = 'Your Meme'
}

function onSaveMeme() {
    _saveCurrMeme()
}





