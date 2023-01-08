const userListEl = document.querySelector(".user-list")
console.log(localStorage.getItem("id")) 






// work on this
async function onSearchChange(event){
  const id = event.target.value
  const posts = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${id}`)
  const postsData =  await posts.json()
       userListEl.innerHTML= postsData.Search.map( user => `<div class="user-card" onclick ="showPosts(${user.id})">
      <div class="user-card__container">
        <h3> <img src=${user.Poster} /> </h4>
          <p> <b>${user.Title}</b> </p>
    
      </div>
    </div>`).join("")
}  


// dynamic API
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














async function main () {
  const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=fast")
  const responseData = await response.json();
  console.log(responseData)
  userListEl.innerHTML = responseData.Search.map(user=> userHTML(user)).join("") 
         
}
main();


function showPosts(id){
  localStorage.setItem("id", id)
  window.location.href = `${window.location.origin}/user.html`
}



function userHTML (user) {
    return `<div class="user-card" onclick ="showPosts(${user.id})">
    <div class="user-card__container">
      <h3> <img src=${user.Poster} /> </h4>
        <p> <b>${user.Title}</b> </p>
  
    </div>
  </div>`
}






