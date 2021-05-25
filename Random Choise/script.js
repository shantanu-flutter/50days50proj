const textField  = document.getElementById('textF')
const btnArea = document.querySelector('.btnArea')

let btnNo = 0;

textField.addEventListener('keyup', (e)=>{
    createTag(e.target.value)

    //console.log(e)

    if(e.key=='Enter'){

        setTimeout(() => {
            e.target.value = '' 
        }, 10);

        selectRandomTag()
    }
    
})

function createTag(e){
   const tags = e.split(',').filter(tag => tag.trim()!='').map(tag => tag.trim() ) 
   console.log(tags)
   btnArea.innerHTML = '';
    tags.forEach(tag => {
        const tagSpan = document.createElement('span')
        tagSpan.classList.add('tag')
        tagSpan.innerText = tag;
        btnArea.appendChild(tagSpan)
    });    

}
function selectRandomTag(){
    const times = 30;


    const interval  = setInterval(() => {
        const tagsList = document.querySelectorAll('.tag')
        const selected = tagsList[ Math.floor(Math.random() * tagsList.length ) ]  
        
        selectTag(selected)
        setTimeout(() => {
            unSelectTag(selected)
        }, 100);

    }, 100);


    setTimeout(() => {
        clearInterval(interval)


        
    }, 100*times);

}


function selectTag(elem){
    elem.classList.add('highlight')
}


function unSelectTag(elem){
    elem.classList.remove('highlight')
}