'use strict'

var gCanvas
var gCtx


function initCanvas() {
    gCanvas = document.querySelector('.meme-canvas')
    gCtx = gCanvas.getContext('2d')
    _setCanvasSize()
    addListeners()
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function renderMeme(meme) {
    clearCanvas()
    const {url, lines} = meme
    drawImageOnCanvas(url, gCtx)
    drawTextOnCanvas(lines, gCtx)
    drawTextBoxOutline(lines, gCtx)
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
    // gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    // gCanvas.addEventListener('mouseup', onUp)
}

// function addTouchListeners() {
//     gCanvas.addEventListener('touchmove', onMove)
//     gCanvas.addEventListener('touchstart', onDown)
//     gCanvas.addEventListener('touchend', onUp)
// }

function onDown(ev) {
    //Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    console.log('pos', pos)
    // if (!isCircleClicked(pos)) return
    // setCircleDrag(true)
    // //Save the pos we start from 
    // gStartPos = pos
    // document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
    const circle = getCircle();
    if (circle.isDrag) {
        const pos = getEvPos(ev)
        //Calc the delta , the diff we moved
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveCircle(dx, dy)
        //Save the last pos , we remember where we`ve been and move accordingly
        gStartPos = pos
        //The canvas is render again after every move
        renderCanvas()
    }
}

function onUp() {
    setCircleDrag(false)
    document.body.style.cursor = 'grab'
}

function getEvPos(ev) {
    console.log('getting pos...')
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