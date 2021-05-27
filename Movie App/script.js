const api_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=813f0affe135ee2589394f4bb8218704&page=1';
const image_path = 'https://image.tmdb.org/t/p/w1280';
const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=813f0affe135ee2589394f4bb8218704&query="'
const form   = document.getElementById('frm')
const search = document.getElementById('search')
const main = document.getElementById('main')


getMovies(api_URL)
async function getMovies(url){
    const res = await fetch(url)
    const data =await  res.json()
    showMovies(data.results)
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchTerm = search.value
    if(searchTerm&&searchTerm!=='' ){
        getMovies(search_url+searchTerm)
    }else{
        window.location.reload()
    }


})
function showMovies(movies){

    main.innerHTML = ''
    console.log(movies)
    movies.forEach((movie)=>{
        const{vote_average, poster_path,overview,title} = movie
        console.log(title)
        const movieEl = document.createElement('div')
        movieEl.classList.add("movie");
        movieEl.innerHTML = `<img src="${image_path+ poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getRating(vote_average)}">${vote_average}</span>
        </div>
        <div class="movie-overview">
            <div class="overview-Title">
                Overview
            </div>
            <div class="description">
                ${overview}
            </div>

        </div>`
        main.appendChild(movieEl)
    

    })

}

function getRating(rating){
    if(rating>=8)return 'green'
    else if(rating>=5) return 'orange';
    else return 'red'
}