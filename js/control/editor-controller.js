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
    const currLineIdx = getCurrLineIdx()
    updateLineText(val, currLineIdx)
    updateCanvas()
}

function onSwichLines(lineId) {
    const totalLineCount = getLinesCount()
    switchCurrLine(totalLineCount, lineId)
    if (!totalLineCount) {
        updateCanvas()
        return
    }
    const currLineIdx = getCurrLineIdx()
    const {txt, font, stroke, fill} = getLine(currLineIdx)

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
    const currLineIdx = getCurrLineIdx()
    deleteLine(currLineIdx)
    onSwichLines()
}

function onSizeChange(val) {
    const currLineIdx = getCurrLineIdx()
    changeFontSize(val, currLineIdx)
    updateCanvas()
}

function onAlignChange(val) {
    const currLineIdx = getCurrLineIdx()
    resetCanvasAlign(currLineIdx, val)
    changeTextAlign(val, currLineIdx)
    updateCanvas()
}

function onFontChange(val) {
    const currLineIdx = getCurrLineIdx()
    changeTextFont(val, currLineIdx)
    updateCanvas()
}

function onStrokeChange(val) {
    const currLineIdx = getCurrLineIdx()
    changeStrokeStyle(val, currLineIdx)
    updateCanvas()
}

function onFillChange(val) {
    const currLineIdx = getCurrLineIdx()
    changeFillStyle(val, currLineIdx)
    updateCanvas()
}

function onDownLoadCanvas(elLink) {
    const newMeme = getMeme()
    renderMeme(newMeme, 0)
    const data = getDataUrl()
    elLink.href = data
    elLink.download = 'Your Meme'
}





