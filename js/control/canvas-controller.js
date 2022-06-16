'use strict'

var gCanvas
var gCtx
var gStartPos

function initCanvas() {
    gCanvas = document.querySelector('.meme-canvas')
    gCtx = gCanvas.getContext('2d')
    _setCanvasSize()
    addListeners()
}

function getDataUrl() {
    return gCanvas.toDataURL()
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function renderMeme(meme, lineId) {
    clearCanvas()
    const {url, lines} = meme
    drawImageOnCanvas(url, gCtx)
    drawTextOnCanvas(lines, gCtx)
    drawTextBoxOutline(lines, lineId, gCtx)
}

function _setCanvasSize() {
    const canvasSize = {h: 500, w: 500}
    gCanvas.width = canvasSize.w
    gCanvas.height = canvasSize.h
}

function _resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
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
    //Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    const clickedBox = isBoxClicked(pos)
    if (!clickedBox) return 
    else {
        setBoxDragOn(clickedBox.idx)
        setCurrLine(clickedBox.idx)
        gStartPos = pos
    }
    // document.body.style.cursor = 'grabbing'
}



function onMove(ev) {
    const box = getBoxIsDrag()
    console.log(box)
    if (!box) return 
    else {
        
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveBox(box, dx, dy)
        //Save the last pos , we remember where we`ve been and move accordingly
        gStartPos = pos
        //The canvas is render again after every move
        const meme = getMeme()
        const currLine = getCurrLine()
        renderMeme(meme, currLine)
    }
}

function onUp() {
    setBoxDragOff()
    // document.body.style.cursor = 'grab'
}

function getEvPos(ev) {
    //Gets the offset pos , the default pos
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
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

function isBoxClicked(clickedPos) {
    let clickedBox
    const linesPos = getLinesPos()
    const boxes = getBoxes()
    boxes.forEach((box, idx) => {

        const {w, h} = box
        const {x, y} = linesPos[idx]
        const maxDisFromX = w /2
        const maxDisFromY = h / 2
        const distanceFromX = Math.abs(x - clickedPos.x)
        const distanceFromY = Math.abs(y - clickedPos.y)

        if (distanceFromX < maxDisFromX && 
            distanceFromY < maxDisFromY) {
            clickedBox = boxes[idx]
        }
    })
    return clickedBox
}
