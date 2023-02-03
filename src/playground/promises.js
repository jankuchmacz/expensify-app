const promise = new Promise((resolve, reject)=>{
    //long running task
    setTimeout(()=>{
       resolve('This is my resolved data'); 
       //resolve('This is my other resolved data'); //second resolve is ignored
       //reject('Something went wrong!');
    }, 1500)    
});
console.log('before');

promise.then((data)=>{
    console.log('1', data);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve('This is my other resolved data'); 
        }, 1500)    
    });
}).then((data)=>{
    console.log('2', data);
}).catch((error)=>{
    console.log(error);
});

console.log('after');