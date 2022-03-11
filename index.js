console.log("Hello");

async function getPosts() {
    const res = await fetch ("http://localhost:3000/posts");
    const finalRes = await res.json();
    console.log(finalRes);
    showPosts(finalRes);
}

async function showPosts(myData){
    const myDiv = document.querySelector(".projectCards");

    for (let i = 0; i < myData.length; i++) {
     myDiv.innerHTML += ` 
     
     <div class="card_${i}">
     <div>
         <img
         class="card-img"
         src="${myData[i].img}" alt="">
     </div>
     <div class="card-content">
         <h2>${myData[i].title}</h2>
         <p class="pCard" > ${myData[i].description}</p>
         <a href="projects.html">Learn More</a>
     </div>
 </div> 
     `

    }
}

getPosts();
