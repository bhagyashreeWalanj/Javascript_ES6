"use strict";


// A Promise is a javascript object thats links "Producing code" and "Consuming code" together. 
// "Producing Code " :  it takes time to produce result by functions 
// "Consuming code ": It wants results to show final output as whether it is success or error  

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

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
      //  callback();
    }, 2000);
}

// Method : 1
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, createPost({ title: "Post Three", body: "This is post Three"}));     
}).then(getPosts) ;


// ---------------------------------------------------------------------------
// Method : 2
const promise_1 =  Promise.resolve("hello World");
const promise_2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const addition = 5+7;
        resolve("My Addition :", addition);
    }, 1000);
});

const promise_3 = 20;
const promise_4 = fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
.then((res)=>res.json());


Promise.all([promise_1, promise_2, promise_4, promise_3])
.then((response)=> console.log("Response : ", response))
.catch((err)=> console.log("Error : ",err));

//----------------------------------------------------------------------------
// Method : 3 
const posts2=[
    { title : "Hello One" , body:"This is post One"},
    { title : "hello Two" , body:"This is post two"},
];


let sentence = '';
function getName() {
    setTimeout(() => {
        let output ='';
        posts2.forEach((post,index)=>{
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 5000);

}

function getId(post) {
    const error = false;
    return new Promise((resolve, reject)=>{
        posts2.push(post);
        if(!error){
            resolve("Okay");
        }else{
            reject("Something Wrong")
        }
    });
}


getId({title : "hello Love"}).then(getName);
