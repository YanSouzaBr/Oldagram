const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postsEl = document.querySelector("#posts")
function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        postsEl.innerHTML +=`
        
        <section>
        
            <div class="container">

                <div class="user">
                
                    <img class="avatar"
                    src=${posts[i].avatar}>

                    <p><strong>${posts[i].name}</strong><br>
                    ${posts[i].location}</p>
                
                </div>

                <img class="post-img" 
                src=${posts[i].post}>

                <div class="icons-container">
                    <img id="heart" class="icons" src="images/icon-heart.png">
                    <img class="icons" src="images/icon-dm.png">
                    <img class="icons" src="images/icon-comment.png">
                </div>


                <div class="comments"
                    <p><strong>${posts[i].likes} likes</strong></p>
                    <p><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
                </div>


            </div>
        
        </section>
        `
    }
}

renderPosts()



