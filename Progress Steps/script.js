const progress = document.getElementById('progress');
const prev  = document.getElementById('prev')
const next = document.getElementById('next')
const circleList = document.querySelectorAll('.circle')
let currentIndex = 1;


next.addEventListener('click',()=>{
    if(currentIndex<circleList.length )
    currentIndex++;

    update()


})


prev.addEventListener('click',()=>{
    if(currentIndex>1)
    currentIndex--;

    update()


})
function update(){

    circleList.forEach((circleInd,idx)=>{

        if(idx<currentIndex){

            circleInd.classList.add('active')
        }else{
            circleInd.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll(".active")
    //console.log(((actives.length-1)/ (circleList.length-1))*100)
    progress.style.width = ((actives.length-1)/ (circleList.length-1))*100+'%'


    if(currentIndex==1){
        prev.disabled = true
    }else if(currentIndex==circleList.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false

    }

}