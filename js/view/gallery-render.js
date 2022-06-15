'use strict'

function getStrHtmlForImages(images) {
    var strHtml = ''
    images.map(image => { strHtml+=
        `<div
            class="item"
            style="background-image: url(${image.url});"
            onclick="onImageSelect('${image.id}')"
            >
        </div>`
    })
    return strHtml
}