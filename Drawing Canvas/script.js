const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorSelector = document.getElementById('colorSelector') 
const clear = document.getElementById('clear')
const mark = document.getElementById('mark')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
let size = 10;
let color = 'black'
let x ;
let y;
let isPressed = false;
mark.innerText = size


canvas.addEventListener('mousedown', (e)=>{

    isPressed = true;
    // let x = e.offsetX;
    // let y = e.offsetY;
    // console.log(isPressed , x,y)

    x= e.offsetX
    y=e.offsetY

})
canvas.addEventListener('mouseleave', (e)=>{

    isPressed = false;
    // let x = e.offsetX;
    // let y = e.offsetY;
    // console.log(isPressed , x,y)
    x= undefined
    y=undefined

})

canvas.addEventListener('mouseup', (e)=>{

    isPressed = false;
    // let x = e.offsetX;
    // let y = e.offsetY;
    // console.log(isPressed , x,y)
    x= undefined
    y=undefined

})


canvas.addEventListener('mousemove', (e)=>{

  if(isPressed){
      
    const xes = e.offsetX
    const yes = e.offsetY

    drawCircle(xes, yes)
    drawLine(x,y, xes, yes)
    x= xes
    y=yes
    

  }

})

function drawCircle(x,y){

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = color
    ctx.lineWidth = size*2
    ctx.stroke();


}


clear.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

increase.addEventListener('click',()=>{
    if(size<=15){
        size+=5;
        mark.innerText = size;
    }

})




decrease.addEventListener('click',()=>{
    if(size>=10){
        size-=5;
        mark.innerText = size;
    }

})

colorSelector.addEventListener('change',(e)=>{
    color= e.target.value
    console.log(color)

})