'use strict'

function makeId(length = 3) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
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