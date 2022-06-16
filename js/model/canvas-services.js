'use strict'

var gBoxes 
var gLinesPos 

function drawImageOnCanvas(url, ctx) {
    const img = new Image()
    img.src = url
    ctx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}


function drawTextOnCanvas(lines, ctx) {
    const linesPos = getLinesPos(lines)

    lines.forEach(line => {
        const {imgSize, txt, txtSize, 
            align, stroke, fill, id, font} = line
        
        ctx.font = `${txtSize}px ${font}`
        ctx.textAlign = align
        ctx.textBaseline = 'middle'
        ctx.lineWidth = txtSize / 15
        
        ctx.setLineDash([0])
        ctx.strokeStyle = stroke
        ctx.strokeText(txt, linesPos[id].x, linesPos[id].y, imgSize.x)
        ctx.fillStyle = fill
        ctx.fillText(txt, linesPos[id].x, linesPos[id].y, imgSize.x)
    })
}

function drawTextBoxOutline(lines, lineId, ctx) {
    if (!gBoxes) {
        gBoxes = _createBoxes(lines)
    }
    lines.forEach((line, idx) => {
        const {txt, txtSize} = line
        const {x, y} = gLinesPos[idx]

        const xAxis = x - (ctx.measureText(txt).width / 2) - 10
        const yAxis = y - (txtSize * 0.5) -5 
        const width = ctx.measureText(txt).width + 20
        const height = txtSize + 10

        updateBox(xAxis, yAxis, width, height, idx)

        if (idx === lineId) {
            ctx.beginPath()
            ctx.setLineDash([1])
            ctx.rect(10, yAxis, 480, height)
            ctx.strokeStyle = 'black'
            ctx.stroke()   
        }
    })
    
}


function updateBox(xAxis, yAxis, width, height, idx) {
    gBoxes[idx].x = xAxis
    gBoxes[idx].y = yAxis
    gBoxes[idx].w = width
    gBoxes[idx].h = height
}

function _createBoxes(lines) {
    const boxes = []
    lines.forEach((line, idx) => {
        boxes.push({
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            idx,
            isDrag: false
        })
    })
    return boxes
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

    gBoxes[box.idx].x += dx
    gBoxes[box.idx].y += dy
}

function getLinesPos(lines) {
    if (!gLinesPos) {
        const linesPos = []
        lines.forEach(line => {
            const {imgSize} = line
            linesPos.push({
                x: imgSize.x / 2,
                y: (line.id === 1)? imgSize.y - 50 : 40,
                id: line.id
            })
        })
        gLinesPos = linesPos
    }
    return gLinesPos
}