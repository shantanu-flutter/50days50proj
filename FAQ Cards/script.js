const buttons = document.querySelectorAll(".btn")

buttons.forEach((btn)=>{

    btn.addEventListener('click', ()=>{

        btn.parentNode.classList.toggle('active')
    })

})
