'use strict'
var gBoxes = []
var gLinesPos 

function drawImageOnCanvas(url, ctx) {
    const img = new Image()
    img.src = url
    ctx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function drawTextOnCanvas(lines, ctx) {
    const linesPos = _getLinesPos(lines)

    lines.forEach((line, idx) => {
        const {imgSize, txt, txtSize, 
            align, stroke, fill} = line
        
        ctx.font = `${txtSize}px Impact`
        ctx.textAlign = align
        ctx.textBaseline = 'top'
        ctx.lineWidth = txtSize / 15
        
        ctx.setLineDash([0])
        ctx.strokeStyle = stroke
        ctx.strokeText(txt, linesPos[idx].x, linesPos[idx].y, imgSize.x)
        ctx.fillStyle = fill
        ctx.fillText(txt, linesPos[idx].x, linesPos[idx].y, imgSize.x)
    })
}

function drawTextBoxOutline(lines, lineIdx, ctx) {
    lines.forEach((line, idx) => {
        const {txt, txtSize} = line
        const {x, y} = gLinesPos[idx]

        const xAxis = x - (ctx.measureText(txt).width / 2) - 10
        const yAxis = y - (txtSize * 0.5) + 20
        const width = ctx.measureText(txt).width + 20
        const height = txtSize + 10

        _saveBox(xAxis, yAxis, width, height, idx)

        if (idx === lineIdx) {
            ctx.beginPath()
            ctx.setLineDash([1])
            ctx.rect(xAxis, yAxis, width, height)
            ctx.strokeStyle = 'black'
            ctx.stroke()   
        }
    })
}

function _saveBox(xAxis, yAxis, width, height, lineIdx) {
    let box = gBoxes.find(box => box.idx === lineIdx)
    if (!box) {
        box = {
            x: xAxis + (width / 2),
            y: yAxis + (height  /2),
            w: width,
            h: height,
            idx: lineIdx,
            isDrag: false
        }
        gBoxes.push(box)
    }
}

function getBoxes() {
    return gBoxes
}

function setBoxDragOn(boxIdx) {
    gBoxes[boxIdx].isDrag = true
}

function setBoxDragOff() {
    gBoxes.forEach(box => box.isDrag = false)
}

function getBoxIsDrag() {
    const box = gBoxes.find(box => box.isDrag === true)
    return box
}

function moveBox(box, dx, dy) {
    gLinesPos[box.idx].x += dx
    gLinesPos[box.idx].y += dy
}

function _getLinesPos(lines) {
    if (!gLinesPos) {
        const linesPos = []
        lines.forEach((line, idx) => {
            const {imgSize} = line
            linesPos.push({
                x: imgSize.x / 2,
                y: (idx === 1)? imgSize.y - 70 : 10,
                idx,
            })
        })
        gLinesPos = linesPos
    }
    return gLinesPos
}