'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

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
    addTouchListeners()
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

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    const selectedText = isTextSelected(pos, gCtx)
    console.log(pos)
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
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        console.log('touch')
        ev = ev.changedTouches[0]
        pos = {
            clickX: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            clickY: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

