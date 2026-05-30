displayPosts();

function addPost(){

let post =
document.getElementById("post").value;

if(post.trim()==""){
alert("Please write something");
return;
}

let posts =
JSON.parse(localStorage.getItem("posts")) || [];

posts.push(post);

localStorage.setItem(
"posts",
JSON.stringify(posts)
);

document.getElementById("post").value="";

displayPosts();
}

function displayPosts(){

let posts =
JSON.parse(localStorage.getItem("posts")) || [];

let output="";

posts.forEach((post,index)=>{

output += `
<div class="post">
<p>${post}</p>

<button onclick="deletePost(${index})">
Delete
</button>

</div>
`;

});

document.getElementById("posts").innerHTML =
output;
}

function deletePost(index){

let posts =
JSON.parse(localStorage.getItem("posts"));

posts.splice(index,1);

localStorage.setItem(
"posts",
JSON.stringify(posts)
);

displayPosts();
}