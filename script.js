function loadPost(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(post => displayPost(post))



}
loadPost();

function displayPost(posts) {
    //console.log(post)//
    let postsContainer = document.getElementById(`post`);
    for( let post of posts){
        let singlePost = document.createElement('div');
        singlePost.classList.add('post');
        singlePost.innerHTML = `
          <h1> Name:${post.name}</h1> 
          <h1> UserName:${post.username}</h1>
          <h1>Email:${post.email}</h1>
          <h1>Adderss:</h1>
                  <h3>Street:${post.address.street}</h3>
                  <h3>Suite:${post.address.suite}</h3>
                  <h3>City:${post.address.city}</h3>
                  <h3>Geo:</h3>
                  <h3>Lat:${post.address.geo.lat}</h3>
                  <h3>Lng:${post.address.geo.lng}</h3>
                  
          
          <h1>Phone:${post.phone}</h1>
          <h1>Website:${post.website}</h1>
        
        `;

        postsContainer.appendChild(singlePost);
    }
}