'use strict'

const IMG_STORAGE_KEY = 'imgDB'
const IMG_URLS_STORAGE_KEY = 'imgUrlDB'
const MEME_STORAGE_KEY = 'memeDB'
const KEYWORDS_STORAGE_KEY = 'keywordsDB'

var gImages
var gImagesUrls
var gMeme
var gLinesId
var gKeyWords
var gKeyWordSearchCountMap

function getImages() {
    loadGallery()
    return gImages
}

function loadGallery() {
    gImages = _loadDataFromStorage(IMG_STORAGE_KEY)
    if (!gImages) gImages = _createImages()
    _saveDataToStorage(IMG_STORAGE_KEY, gImages)
}

function getMeme(imgId) {
    if (!gMeme) {
        const img = gImages.find(img => img.id === imgId)
        gMeme = _createMeme(img)
    }
    return gMeme
}

function getImageById(id) {
    return gImages.find(img => img.id === id)
}

function _createImages() {
    const images = []
    gImagesUrls = getImageUrls()
    gImagesUrls.forEach(url => images.push(_createImg(url)))
    return images
}

function _createImg(url) {
    return {
        id: makeId(),
        url,
        keywords: _createKeyWords(url)
    }
}

function getImageUrls() {
    gImagesUrls = _loadDataFromStorage(IMG_URLS_STORAGE_KEY)
    if (!gImagesUrls) gImagesUrls = _createImageUrls()
    _saveDataToStorage(IMG_URLS_STORAGE_KEY, gImagesUrls)
    return gImagesUrls
}

function _createKeyWords(url) {
    const [, ...keyWords] = url.split('.').slice(1, -1) 

    if (!gKeyWords) gKeyWords = keyWords
    else {
        const newkeyWords = keyWords.filter(keyWord => {
            if (!gKeyWords.includes(keyWord)) return keyWord})
            gKeyWords.push(...newkeyWords)
        }
        return keyWords
}

function  _createImageUrls() {
    return [
        './img/square/img1.dogs.babies.jpg',
        './img/square/img2.cats.jpg',
        './img/square/img3.dogs.jpg', 
    ]
}

function _createMeme(img) {
    return {
        url: img.url,
        imgId: img.id,
        isSelected: false,
        lines: _createMemeLines()
    }
}

function setMemeText(txt, lineIdx) {
    gMeme.lines[lineIdx].txt = txt
    return gMeme
}

function _createMemeLines() {
    gLinesId = 0
    return [{
        id: gLinesId,
        imgSize: {x: 500, y: 500},
        txt: 'Your Text',
        txtSize: 50,
        align: 'center',
        stroke: 'black',
        fill: 'white',
        font: 'Impact' 
    },
    {
        id: ++gLinesId,
        imgSize: {x: 500, y: 500},
        txt: 'Your Text',
        txtSize: 50,
        align: 'center',
        stroke: 'black',
        fill: 'white',
        font: 'Impact'
    }]
}

function addNewLine() {
    const newLine = createNewLine()
    gMeme.lines.push(newLine)
    return gMeme
}

function createNewLine() {
    return {
        id: ++gLinesId,
        imgSize: {x: 500, y: 500},
        txt: 'Your Text',
        txtSize: 50,
        align: 'center',
        stroke: 'black',
        fill: 'white', 
        font: 'Impact'
    }
}

function deleteLine(lineId) {
    const line = gMeme.lines.findIndex(line => line.id === lineId)
    gMeme.lines.splice(line, 1)
    return gMeme
}

function changeFontSize(val, lineId) {
    console.log(gMeme)
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

function _loadDataFromStorage(key) {
    loadFromStorage(key)
}

function _saveDataToStorage(key, data) {
    saveToStorage(key, data)
}

