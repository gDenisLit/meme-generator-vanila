'use strict'

var gCanvas
var gCtx
var gStartPos

function initCanvas(meme) {
    gCanvas = getElCanvas()
    gCtx = gCanvas.getContext('2d')

    setCanvasSize(meme)
    renderMeme(meme)
    addListeners() 
}

function renderMeme(meme, editMode=1) {
    const {img, lines} = meme
    
    clearCanvas(gCtx)
    drawImageOnCanvas(img, gCtx)
    drawLinesOnCanvas(lines, gCtx, editMode)
}

function setCanvasSize(meme) {
    const {w, h} = getImgSize(meme.img.id)
    gCanvas.width = w
    gCanvas.height = h
}

function getCanvasSize() {
    return {
        w: gCanvas.width,
        h: gCanvas.height
    }
}

function getDataUrl() {
    return gCanvas.toDataURL()
}

function addListeners() {
    addMouseListeners()
    // addTouchListeners()
    // //Listen for resize ev 
    // window.addEventListener('resize', () => {
    //     resizeCanvas()
    //     renderCanvas()
    // })
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

// function addTouchListeners() {
//     gCanvas.addEventListener('touchmove', onMove)
//     gCanvas.addEventListener('touchstart', onDown)
//     gCanvas.addEventListener('touchend', onUp)
// }

function onDown(ev) {
    const pos = getEvPos(ev)
    const selectedText = isTextSelected(pos, gCtx)
    if (!selectedText) return

    onSwichLines(selectedText.id)
    setLineIsDrag(selectedText.id)
    gStartPos = pos
}

function onMove(ev) {
    const line = getLineIsDrag()
    if (!line) return

    const pos = getEvPos(ev)
    const dx = pos.clickX - gStartPos.clickX
    const dy = pos.clickY - gStartPos.clickY

    gStartPos = pos
    moveLine(line.id, dx, dy)
    updateCanvas()
}

function onUp() {
    setLinesDragOff()
}

function getEvPos(ev) {
    var pos = {
        clickX: ev.offsetX,
        clickY: ev.offsetY
    }
    // Check if its a touch ev
    // if (gTouchEvs.includes(ev.type)) {
    //     //soo we will not trigger the mouse ev
    //     ev.preventDefault()
    //     //Gets the first touch point
    //     ev = ev.changedTouches[0]
    //     //Calc the right pos according to the touch screen
    //     pos = {
    //         x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
    //         y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
    //     }
    // }
    return pos
}

