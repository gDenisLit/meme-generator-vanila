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
    if (gMeme.lines.length === 3) return
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
        lines: _createMemeLines()
    }
}

function _createMemeLines() {
    return [{
        id: 0,
        txt: 'Your Text',
        txtSize: 50,
        align: 'center',
        stroke: '#000000',
        fill: '#ffffff',
        font: 'Impact',
        isDrag: false,
    },
    {
        id: 1,
        txt: 'Your Text',
        txtSize: 50,
        align: 'center',
        stroke: '#000000',
        fill: '#ffffff',
        font: 'Impact',
        isDrag: false,
    }]
}

function _createNewLine() {
    return {
        id: 2,
        imgSize: {x: 500, y: 500},
        txt: 'Your Text',
        txtSize: 50,
        align: 'center',
        stroke: '#000000',
        fill: '#ffffff', 
        font: 'Impact',
        isDrag: false,
    }
}

function _loadDataFromStorage(key) {
    loadFromStorage(key)
}

function _saveDataToStorage(key, data) {
    saveToStorage(key, data)
}

