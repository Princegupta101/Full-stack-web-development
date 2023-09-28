async function getCombinData(){
    const [data1, data2]= await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1'").then((response )=>response.json()),
        fetch("https://jsonplaceholder.typicode.com/todos/1'git ").then((response )=>response.json()),
    ]);
    const combinData={
        todo: data1,
        post:data2,
    };
    return combinData;
}
getCombinData().then((data)=>console.log(data));