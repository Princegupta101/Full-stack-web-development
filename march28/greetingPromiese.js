function greeting(name){
    return new Promise((resolve)=>{
        const greeting=`Hello,${name}!`;
        resolve(greeting);
    });
}
greeting("Prince").then((massage)=>{
    console.log(massage);
})