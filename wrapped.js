const canvas = document.getElementById('wrapped')
const ctx = canvas.getContext('2d')

const width = 720
const height = 1280

canvas.width = width
canvas.height = height

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, width, height)

ctx.fillStyle = 'gray'

let imgSize = 600
let halfMargin = (width - imgSize) / 2
ctx.fillRect(halfMargin, halfMargin, imgSize, imgSize)

let uploadedImage = undefined

document.getElementById('imgFile').addEventListener('change', (e) => {
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            uploadedImage = img
            drawUploadedImage()
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);   
}, false)

const firstColor = document.getElementById('firstColor')
const secondColor = document.getElementById('secondColor')

function drawGradient() {
    const grd = ctx.createLinearGradient(0, 0, 0, height)
    grd.addColorStop(0, firstColor.value)
    grd.addColorStop(1, secondColor.value)

    ctx.fillStyle = grd
    ctx.fillRect(0, 0, width, height)


    drawText()
    drawUploadedImage()
}

function drawUploadedImage() {
    if (uploadedImage === undefined) return
    ctx.drawImage(uploadedImage, 0, 0, uploadedImage.width, uploadedImage.height, halfMargin, halfMargin, imgSize, imgSize);
}

firstColor.addEventListener('input', drawGradient, false)
secondColor.addEventListener('input', drawGradient, false)

const header1 = document.getElementById('header1')
const header11 = document.getElementById('header11')
const header12 = document.getElementById('header12')
const header13 = document.getElementById('header13')
const header14 = document.getElementById('header14')
const header15 = document.getElementById('header15')
const header2 = document.getElementById('header2')
const header21 = document.getElementById('header21')
const header22 = document.getElementById('header22')
const header23 = document.getElementById('header23')
const header24 = document.getElementById('header24')
const header25 = document.getElementById('header25')
const header3 = document.getElementById('header3')
const header31 = document.getElementById('header31')
const header4 = document.getElementById('header4')
const header41 = document.getElementById('header41')

function drawText() {
    ctx.fillStyle = 'red'
    ctx.font = '48px serif'
    
    const startY = halfMargin * 2 + imgSize
    const headerPx = 48
    const mainPx = 32

    ctx.fillText(header1.value, halfMargin, startY)

    ctx.font = '32px serif'
    ctx.fillText(header11.value, halfMargin, startY + headerPx)
    ctx.fillText(header12.value, halfMargin, startY + headerPx + mainPx * 1)
    ctx.fillText(header13.value, halfMargin, startY + headerPx + mainPx * 2)
    ctx.fillText(header14.value, halfMargin, startY + headerPx + mainPx * 3)
    ctx.fillText(header15.value, halfMargin, startY + headerPx + mainPx * 4)

    ctx.font = '48px serif'
    ctx.fillText(header2.value, halfMargin + imgSize / 2, startY)
    ctx.font = '32px serif'
    ctx.fillText(header21.value, halfMargin + imgSize / 2, startY + headerPx)
    ctx.fillText(header22.value, halfMargin + imgSize / 2, startY + headerPx + mainPx * 1)
    ctx.fillText(header23.value, halfMargin + imgSize / 2, startY + headerPx + mainPx * 2)
    ctx.fillText(header24.value, halfMargin + imgSize / 2, startY + headerPx + mainPx * 3)
    ctx.fillText(header25.value, halfMargin + imgSize / 2, startY + headerPx + mainPx * 4)

    ctx.font = '48px serif'
    ctx.fillText(header3.value, halfMargin, startY + headerPx + mainPx * 4 + halfMargin)
    ctx.font = '64px serif'
    ctx.fillText(header31.value, halfMargin, startY + headerPx + mainPx * 4 + halfMargin + 64)

    ctx.font = '48px serif'
    ctx.fillText(header4.value, halfMargin + imgSize / 2, startY + headerPx + mainPx * 4 + halfMargin)
    ctx.font = '64px serif'
    ctx.fillText(header41.value, halfMargin + imgSize / 2, startY + headerPx + mainPx * 4 + halfMargin + 64)
}

header1.addEventListener('input', drawText, false)
header11.addEventListener('input', drawText, false)
header12.addEventListener('input', drawText, false)
header13.addEventListener('input', drawText, false)
header14.addEventListener('input', drawText, false)
header15.addEventListener('input', drawText, false)
header2.addEventListener('input', drawText, false)
header21.addEventListener('input', drawText, false)
header22.addEventListener('input', drawText, false)
header23.addEventListener('input', drawText, false)
header24.addEventListener('input', drawText, false)
header25.addEventListener('input', drawText, false)
header3.addEventListener('input', drawText, false)
header31.addEventListener('input', drawText, false)
header4.addEventListener('input', drawText, false)
header41.addEventListener('input', drawText, false)

drawText()