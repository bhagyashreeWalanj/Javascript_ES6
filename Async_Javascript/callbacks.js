// Async functions means functions running in parallel with other functions. 
// It can be handled by 2 methods : 
// 1. callback methods
// 2. Promises
// When using the JavaScript function setTimeout(), 
// you can specify a callback function to be executed on time-out:



const posts=[
    { title : "Post One" , body:"This is post One"},
    { title : "Post Two" , body:"This is post two"},
];

function getPosts() {
    setTimeout(() => {
        let output ='';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: "Post Three", body: "This is post Three"}, getPosts);


