'use strict'

var gCurrLineId = 0
var gLinesPos = []

function clearCanvas(ctx) {
    const { w, h } = getCanvasSize()
    ctx.clearRect(0, 0, w, h)
}

function drawImageOnCanvas(img, ctx) {
    const { w, h } = getCanvasSize()
    const elImg = new Image()
    const { url } = img

    elImg.src = url
    ctx.drawImage(elImg, 0, 0, w, h)
}

function drawLinesOnCanvas(lines, ctx, editMode) {
    const linesPos = []
    lines.forEach((line, idx) => {
        const { txt, txtSize, align, stroke, fill, font, id, } = line

        ctx.font = `${txtSize}px ${font}`
        ctx.textAlign = align
        ctx.textBaseline = 'top'
        ctx.lineWidth = txtSize / 15

        const { x, y } = getLinePos(id, align)
        // console.log(x, y)
        // console.log(align)
        const { w } = getCanvasSize()
        linesPos.push({ x, y, align, txt, txtSize, id })

        ctx.setLineDash([0])
        ctx.strokeStyle = stroke
        ctx.strokeText(txt, x, y, w)
        ctx.fillStyle = fill
        ctx.fillText(txt, x, y, w)

        if (idx === gCurrLineId && editMode) {
            drawTextBoxOutline(txtSize, y, ctx)
        }
    
    })
    gLinesPos = linesPos
}

function getLinePos(lineId, align) {
    const line = gLinesPos.find(line => line.id === lineId)
    if (line) return line
    
    const { w, h } = getCanvasSize()
    let x, y

    if (align === 'start') x = w * 0.1
    else if (align === 'end') x = w * 0.9
    else x = w * 0.5

    if (!lineId) y = h * 0.03
    else if (lineId === 1) y = h * 0.85
    else y = h * 0.4

    return { x, y }
}

function isTextSelected(pos, ctx) {
    let selectedText
    const { clickX, clickY } = pos

    gLinesPos.forEach(line => {
        const { txtSize } = line
        const { txtX, txtY, txtWidth } = _txtCenterPos(line, ctx)

        const maxDisFromX = txtWidth / 2
        const maxDisFromY = txtSize / 2

        const disFromX = Math.abs(txtX - clickX)
        const disFromY = Math.abs(txtY - clickY)

        if (disFromX < maxDisFromX &&
            disFromY < maxDisFromY) {
            selectedText = line
        }
    })
    return selectedText
}


function drawTextBoxOutline(txtSize, txtY, ctx) {
    const { w } = getCanvasSize()
    const x = w * 0.05
    const y = txtY - 5
    
    ctx.beginPath()
    ctx.setLineDash([2])
    ctx.rect(x, y, w * 0.9, txtSize + 10)
    ctx.strokeStyle = '#505050'
    ctx.lineWidth = 8
    ctx.stroke()
}

function switchCurrLine(linesCount, lineId) {
    if (lineId !== undefined) {
        gCurrLineId = lineId
        return
    }
    if (gCurrLineId < linesCount - 1) gCurrLineId++
    else if (gCurrLineId >= linesCount - 1) gCurrLineId = 0
    
}

function resetCanvasAlign(currLineId, align) {
    const { w } = getCanvasSize()
    
    let x
    if (align === 'start') x = w * 0.1
    else if (align === 'end') x = w * 0.9
    else x = w * 0.5
    
    gLinesPos[currLineId].x = x
    gLinesPos[currLineId].align = align
}

function getCurrLineId() {
    return gCurrLineId
}

function moveLine(lineId, dx, dy) {
    const line = gLinesPos.find(line => line.id === lineId)
    line.x += dx
    line.y += dy
}

function _txtCenterPos(line, ctx) {
    const { x, y, align, txt, txtSize } = line
    const txtWidth = ctx.measureText(txt).width
    const txtY = y + (txtSize / 2)

    let txtX
    if (align === 'start') txtX = x + (txtWidth / 2)
    else if (align === 'end') txtX = x - (txtWidth / 2)
    else txtX = x

    return { txtX, txtY, txtWidth }
}



