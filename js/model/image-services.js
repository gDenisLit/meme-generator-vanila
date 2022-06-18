'use strict'

const IMG_URLS_STORAGE_KEY = 'imgUrlDB'
const KEYWORDS_STORAGE_KEY = 'keywordsDB'

var gImages
var gKeyWords
var gKeyWordSearchCountMap

// Deliver Data
function getImages() {
    if (!gImages) gImages = _createImages()
    return gImages
}

function getImageById(id) {
    return gImages.find(img => img.id === id)
}

// Recieve data
function setImgSizes(imgObjects) {
    imgObjects.forEach(imgObj => {
        const myImg = gImages.find(img => img.id === imgObj.id)
        const {w, h} = imgObj
        myImg.w = w
        myImg.h = h
    })
}

// Internal services
function _createImages() {
    const images = []
    const imgUrls = _getImageUrls()
    imgUrls.forEach(url => images.push(_createImg(url)))
    return images
}

function _getImageUrls() {
    let imgUrls = _loadDataFromStorage(IMG_URLS_STORAGE_KEY)
    if (!imgUrls) imgUrls = _createImageUrls()
    _saveDataToStorage(IMG_URLS_STORAGE_KEY, imgUrls)
    return imgUrls
}

function _createImg(url) {
    return {
        id: makeId(),
        url,
        keywords: '',
        w: 0,
        h: 0
    }
}


function _loadDataFromStorage(key) {
    loadFromStorage(key)
}

function _saveDataToStorage(key, data) {
    saveToStorage(key, data)
}

