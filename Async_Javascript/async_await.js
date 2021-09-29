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
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        const error = false;
       
            posts.push(post);
            if(!error){
                resolve("Okay");
            }else{
                reject("Something Wrong")
            }
        
    }, 2000);
  });
}


// async / await method 
async function initSyncMethod() {
    await createPost({title :"hello"});

    getPosts();
}

(async function(){
   await initSyncMethod();
   // console.log('test');
    })();


    // method : 2 

const data1 =()=>{
    return new Promise((resolve, reject)=>{

        console.log("hello World :", 5+7);
        if(false){
            reject()
        }else{
            resolve()
        }
    })
}

const data2=()=>{
    return new Promise((resolve, reject)=>{
        console.log("Hello Germany");
        resolve("okay");
    })
    
}

(async function() {
    await data2();
    await data1();
})();
