var pr1 = new Promise((resolve, reject)=>{
    resolve(100); // pushes the success callback to the callback-queue
    console.log("resolved!");
    resolve(200);
    console.log("resolved!");
    resolve(300);
    console.log("resolved!");
});

console.log(pr1);

pr1.then(data=>{
    console.log("Promise successfully resolved with data: " + data);
}) // when the promise is resolved
.catch(err=>{
    console.error("Promise rejected with error: ", err);
}); // when the promise is rejected

console.log("Done!");