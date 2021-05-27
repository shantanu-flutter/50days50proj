const countes = document.querySelectorAll(".counter")

countes.forEach((counter)=> {

    counter.innerText = '0'
    const target =  +counter.getAttribute('data-targets')
    const incriment = target/200
    console.log(incriment)
    var c = 0;

    const ab = setInterval(()=>{
        
         c= c+incriment;  

         console.log(c)
         counter.innerText = `${Math.ceil(c)}`
         if((c +incriment)> target ){
            clearInterval(ab)
            c = target;
        }
        
        

    } , 1)



})


