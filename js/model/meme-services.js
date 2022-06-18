'use strict'

const MEME_STORAGE_KEY = 'memeDB'
var gMeme

// Deliver Data
function getMeme(imgId) {
    if (!gMeme) {
        const img = gImages.find(img => img.id === imgId)
        gMeme = _createMeme(img)
    }
    return gMeme
}

function getLine(lineIdx) {
    return gMeme.lines[lineIdx]
}

function getLinesCount() {
    return gMeme.lines.length
}

function addLine() {
    const newLine = _createNewLine()
    gMeme.lines.push(newLine)
    return newLine.id
}

function getLineIsDrag() {
    return gMeme.lines.find(line => line.isDrag === true)
}

// Update Data
function updateLineText(newTxt, lineId) {
    gMeme.lines[lineId].txt = newTxt
}

function deleteLine(lineIdx) {
    const idx = gMeme.lines.findIndex((line, idx)=> idx === lineIdx)
    gMeme.lines.splice(idx, 1)
}

function changeFontSize(val, lineId) {
    gMeme.lines[lineId].txtSize += +val
}

function changeTextAlign(val, lineId) {
    gMeme.lines[lineId].align = val
}

function changeTextFont(val, lineId) {
    gMeme.lines[lineId].font = val
}

function changeStrokeStyle(val, lineId) {
    gMeme.lines[lineId].stroke = val
}

function changeFillStyle(val, lineId) {
    gMeme.lines[lineId].fill = val
}

function setLineIsDrag(lineId) {
    gMeme.lines[lineId].isDrag = true
}

function setLinesDragOff() {
    gMeme.lines.forEach(line => line.isDrag = false)
}


// Internal services 
function _createMeme(img) {
    return {
        img,
        lines: _createMemeLines(2)
    }
}

function _createMemeLines(numOfLines) {
    const lines = []
    for (let i = 0; i < numOfLines; i++) {
        lines.push({
            id: i,
            txt: 'Your Text',
            txtSize: 50,
            align: 'center',
            stroke: '#000000',
            fill: '#ffffff',
            font: 'Impact',
            isDrag: false,
            isShown: true,
        })
    }
    return lines
}

function _createNewLine() {
    // const lines = gMeme.lines
    return {
        id: gMeme.lines.length,
        txt: 'Your Text',
        txtSize: 50,
        align: 'center',
        stroke: '#000000',
        fill: '#ffffff', 
        font: 'Impact',
        isDrag: false,
        isShown: true,
    }
}

function _loadDataFromStorage(key) {
    loadFromStorage(key)
}

function _saveDataToStorage(key, data) {
    saveToStorage(key, data)
}

