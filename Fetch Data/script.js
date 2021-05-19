const jokes = document.getElementById("jokes");
const btn = document.getElementById("btn");

fetchApi()

btn.addEventListener('click', ()=>{
    fetchApi();

})

async  function fetchApi(){
    const config = {
        headers:{
            Accept:"application/json",
        }
    }

    //  fetch('https://icanhazdadjoke.com/',config ).
    //  then((res)=> res.json())
    //  .then((data)=>  {
    //     console.log(data) 
    //     jokes.innerText = data.joke})

    const res = await fetch('https://icanhazdadjoke.com/',config )
    const data = await res.json()

   jokes.innerText = data.joke



}
