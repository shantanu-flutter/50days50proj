const slides = document.querySelectorAll('.slide')
const body  = document.body;
const leftBtn = document.getElementById('left-arrow')
const rightBtn = document.getElementById('right-arrow')

let activeSlide = 0;
setBackGround();

function setBackGround() {
    body.style.backgroundImage =
     slides[activeSlide].style.backgroundImage;

}

leftBtn.addEventListener('click', ()=>{
    slides[activeSlide].classList.remove('active')
    if(activeSlide===0)activeSlide = slides.length-1;
    else activeSlide--
    slides[activeSlide].classList.add('active')
    setBackGround();

})



rightBtn.addEventListener('click', ()=>{
    slides[activeSlide].classList.remove('active')
    if(activeSlide===slides.length-1)activeSlide = 0;
    else activeSlide++
    slides[activeSlide].classList.add('active')

    setBackGround();

})
