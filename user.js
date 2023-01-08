console.log(localStorage.getItem("id")) 
const userListEl = document.querySelector(".user-list")

// work on this
async function onSearchChange(event){
    const id = event.target.value
    const posts = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${id}`)
    const postsData =  await posts.json()
         userListEl.innerHTML= postsData.map( user => `<div class="user-card" onclick ="showPosts(${user.id})">
        <div class="user-card__container">
          <h3> <img src=${user.Poster} /> </h4>
            <p> <b>${user.Title}</b> </p>
      
        </div>
      </div>`).join("")
}  

async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${id}`)
    const postsData =  await posts.json()
console.log(postsData)
     userListEl.innerHTML= postsData.map( user => `<div class="user-card" onclick ="showPosts(${user.id})">
    <div class="user-card__container">
      <h3> <img src=${user.Poster} /> </h4>
        <p> <b>${user.Title}</b> </p>
  
    </div>
  </div>`).join("")
}
main()

