const smallCups = document.querySelectorAll('.cup-small');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');


smallCups.forEach((cup,idx) =>{

    cup.addEventListener('click', ()=>{
        console.log('clicked', idx)
        highlight(idx)
    })

})

function highlight(idx){
    
    if(smallCups[idx].classList.contains('filled') &&
    !smallCups[idx+1].classList.contains('filled')
    ){

        idx--
    }
    

    smallCups.forEach((filteredCup, idx2)=>{
        if(idx>=idx2){
            filteredCup.classList.add('filled')
        }else{
            filteredCup.classList.remove('filled')
        }

    })


    fillBiggerCup()
}

function fillBiggerCup(){

    const filledNu = document.querySelectorAll('.filled').length
    const cupsLength = smallCups.length

    if(filledNu==0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
    }

    percentage.style.height = `${330/cupsLength * filledNu}px`; 
    percentage.innerText =`${filledNu/cupsLength*100}%`


    if(filledNu == cupsLength){
        remained.style.visibility = 'hidden'
        remained.style.height = 0;
        
    }else{
        remained.style.visibility = 'visible'
    }




}


