'use strict'

function drawImageOnCanvas(url, ctx) {
    const img = new Image()
    img.src = url
    ctx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function drawTextOnCanvas(lines, ctx) {
    lines.forEach((line, idx) => {
        const {imgSize, txt, txtSize, 
            align, stroke, fill, baseline} = line
        const txtYAxis = (!idx)? 10 : imgSize.y - 10
        
        ctx.font = `${txtSize}px Impact`
        ctx.textAlign = align
        ctx.textBaseline = baseline
        ctx.lineWidth = txtSize / 15

        ctx.strokeStyle = stroke
        ctx.strokeText(txt, imgSize.x / 2, txtYAxis, imgSize.x)
        ctx.fillStyle = fill
        ctx.fillText(txt, imgSize.x / 2, txtYAxis, imgSize.x)
    })
}

function drawTextBoxOutline(lines, ctx) {
    lines.forEach((line, idx) => {
        const {imgSize, txt, txtSize} = line

        const xAixs = (imgSize.x - ctx.measureText(txt).width) / 2 - 10
        const yAxis = (!idx)? 5 : (imgSize.y - txtSize) - 15
        const width = ctx.measureText(txt).width + 20
        const height = txtSize + 10
  
        ctx.beginPath()
        ctx.setLineDash([1])
        ctx.rect(xAixs, yAxis, width, height)
        ctx.strokeStyle = 'black'
        ctx.stroke()
    })
}