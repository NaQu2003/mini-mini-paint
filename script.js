const canvas = document.querySelector("#draw")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let x = 0;
let y = 0;
let isDrawning = false;
const color = document.querySelector("#color-input")
const bgColor = document.querySelector("#bg-color-input")
const thickness = document.querySelector('#thickness-input')

function draw(e){
    if(!isDrawning) return
    ctx.beginPath();
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round';
    ctx.moveTo(x,y)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
    x =  e.offsetX;
    y = e.offsetY
  }
 
  canvas.addEventListener('mousedown',(e) =>{
    isDrawning = true;
    x =  e.offsetX;
    y = e.offsetY
  })
  canvas.addEventListener('mousemove',draw)
  canvas.addEventListener('mouseout',() => isDrawning = false)
  canvas.addEventListener('mouseup',() => isDrawning = false)
  color.addEventListener('change',() =>{
      ctx.strokeStyle = color.value
  })
  
  bgColor.addEventListener('change',()=>{
      canvas.style.backgroundColor = bgColor.value
  })
  thickness.addEventListener('change',()=>{
    ctx.lineWidth = thickness.value
  })