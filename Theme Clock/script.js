const hourEl  = document.querySelector('.hour')
const minuteEL  = document.querySelector('.minute')
const secondEl  = document.querySelector('.second')
const btn = document.getElementById('mode')
const timeEl = document.getElementById('time')
const dayEl = document.getElementById('day')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];





const inter = setInterval(()=>{

    setTime();



} ,1000 )


function setTime(){

    const current = new Date();
    const day =  current.getDay()
    const month = current.getMonth()
    const year = current.getFullYear()
    const hourCl =  current.getHours()%12;
    const min = current.getMinutes();
    const sec = current.getSeconds();

    console.log(days[day])

    timeEl.innerText = `${hourCl}:${min<10?'0':''}${min}`
    dayEl.innerText = `${days[day]}, ${months[month]}`

    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        hourCl, 0,11,0,360
    )}deg)`

    minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(
        min, 0,60,0,360
    )}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        sec, 0,60,0,360
    )}deg)`





}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

btn.addEventListener('click', (e)=>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){

        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    }else{

        
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }


})