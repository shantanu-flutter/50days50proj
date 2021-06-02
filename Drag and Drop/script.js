const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empties.forEach((empty)=>{

    empty.addEventListener( 'dragenter',dragEnter )
    empty.addEventListener( 'dragleave',dragleave )
    empty.addEventListener( 'dragover',dragOver )
    empty.addEventListener( 'drop',dragDrop )


})



function dragStart(){
    this.className+=' hold'
    setTimeout(()=> this.className = 'invisible',0)
   
}
function dragEnd(){
    this.className = 'fill'
}
function dragEnter(e){
    e.preventDefault()
    this.className+=' hovered'
}
function dragleave(){
    console.log('dragleave')
    this.className='empty'
}

function dragOver(e){
    e.preventDefault()
}

function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}