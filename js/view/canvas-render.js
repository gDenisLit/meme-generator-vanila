'use strict'

function drawImageOnCanvas(url, ctx) {
    const img = new Image()
    img.src = url
    ctx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function drawTextOnCanvas(lines, lineIdx, ctx) {
    lines.forEach((line, idx) => {
        const {txt, size, align, stroke, fill, pos} = line
        const {x, y} = (pos)? pos : gDefaultLinePos[idx] 
        // if (idx === lineIdx) {

        // }
        ctx.font = `${size} Ariel`
        ctx.textAlign = align
    
        ctx.strokeStyle = stroke
        ctx.strokeText(txt, x, y)
        ctx.fillStyle = fill
        ctx.fillText(txt, x, y)
    })
}