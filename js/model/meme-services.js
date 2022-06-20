'use strict'

const MEMES_STORAGE_KEY = 'memeDB'

var gMeme
var gSaveMemes = []

// Deliver Data
function getMeme(imgId) {
    if (!gMeme) {
        const img = getImageById(imgId)
        gMeme = _createMeme(img)
    }
    // loadSavedMemes()
    return gMeme
}

function getLine(lineId) {
    return gMeme.lines[lineId]
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

function generateRandomMeme() {
    const randomImg = getRandomImg()
    const numOfLines = getRandomIntInclusive(1, 3)
    const lines = _createMemeLines(numOfLines)

    lines.forEach(line => {
        line.txt = getRandomTxtLine()
        line.txtSize = getRandomIntInclusive(10, 50)
        line.stroke = generateRandomColor()
        line.fill = generateRandomColor()
    })
    gMeme = { img: randomImg, lines}
    return gMeme
}

// Update Data
function updateLinesProp(val, lineId, key) {
    if (key === 'txtSize') gMeme.lines[lineId][key] += +val
    else gMeme.lines[lineId][key] = val
}

function deleteLine(lineId) {
    const idx = gMeme.lines.findIndex((line, idx)=> idx === lineId)
    gMeme.lines.splice(idx, 1)
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
        })
    }
    return lines
}

function _createNewLine() {
    return {
        id: gMeme.lines.length,
        txt: 'Your Text',
        txtSize: 50,
        align: 'center',
        stroke: '#000000',
        fill: '#ffffff', 
        font: 'Impact',
        isDrag: false,
    }
}

function _saveCurrMeme() {
    gSaveMemes.push(gMeme)
    _saveDataToStorage(MEMES_STORAGE_KEY, gSaveMemes)
    console.log(gSaveMemes)
}

function loadSavedMemes() {
    gSaveMemes = _loadDataFromStorage(MEMES_STORAGE_KEY)
    return gSaveMemes
}

function _loadDataFromStorage(key) {
    loadFromStorage(key)
}

function _saveDataToStorage(key, data) {
    saveToStorage(key, data)
}

