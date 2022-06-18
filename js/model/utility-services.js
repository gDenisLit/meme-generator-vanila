'use strict'

function makeId(length = 3) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
    return randomColor
}

function getRandomTxtLine() {
    const memesSentences = [
    'I never eat falafel',
    'DOMS DOMS EVERYWHERE',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'I`m a simple man',
    'i see vanilla JS, i click like!',
    'JS, HTML,CSS??',
    'Even my momma can do that',
    'May the force be with you',
    'I know JS',
    'JS Where everything is made up',
    'and the rules dont matter',
    'Not sure if im good at programming', 
    'or good at googling',
    'But if we could',
    'JS what is this?',
    'Write hello world', 
    'add to cv 7 years experienced',
    ]
    return memesSentences[getRandomIntInclusive(0, memesSentences.length - 1)]
}

function  _createImageUrls() {
    return [
        './img/square/1.jpg',
        './img/square/2.jpg',
        './img/square/3.jpg',
        './img/square/4.jpg',
        './img/square/5.jpg',
        './img/square/6.jpg',
        './img/square/7.jpg',
        './img/square/8.jpg',
        './img/square/9.jpg',
        './img/square/10.jpg',
        './img/square/11.jpg',
        './img/square/12.jpg',
        './img/square/13.jpg',
        './img/square/14.jpg',
        './img/square/15.jpg',
        './img/square/16.jpg',
        './img/square/17.jpg',
        './img/square/18.jpg',
        './img/various/001.jpg',
        './img/various/002.jpg',
        './img/various/003.jpg',
        './img/various/004.jpg',
        './img/various/005.jpg',
        './img/various/006.jpg',
        './img/various/007.jpg',
        './img/various/008.jpg',
        './img/various/009.jpg',
        './img/various/010.jpg',
        './img/various/011.jpg',
        './img/various/012.jpg',
        './img/various/013.jpg',
        './img/various/014.jpg',
        './img/various/015.jpg',
        './img/various/016.jpg',
        './img/various/017.jpg',
        './img/various/018.jpg',
        './img/various/019.jpg',
        './img/various/020.jpg',
        './img/various/021.jpg',
        './img/various/022.jpg',
        './img/various/023.jpg',
        './img/various/024.jpg',
        './img/various/025.jpg',
    ]
}

function _getRandomKeyWords() {
    const keyWordsBank = [
        'Dogs',
        'cats',
        'Israel',
        'Politics',
        'Girls',
        'Guys',
        'Anime',
        'WTF',
        'Random',
        'Animals',
        'Awesom',
        'Cosplay',
        'Gaming',
        'LOL',
        'Savage',
    ]
    const keyWords = []
    for (let i = 0; i < 4; i++) {
        keyWords.push(keyWordsBank[getRandomIntInclusive(0, keyWordsBank.length - 1)])
    }
    return keyWords
}