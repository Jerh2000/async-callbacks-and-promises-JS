const somethingWillHappen = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve("OK");
        }else{
            reject("No");
        }
    });
}

somethingWillHappen()
.then(response => console.log(response))
.catch(e=> console.error(e));

const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('True');
            },2000)
        }else{
            const error = new Error('Algo no sucedio');
            reject(error);
        }
    });
}

somethingWillHappen2()
.then(reponse => console.log(reponse))
.catch(e => console.error(e));


Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(respose=>console.log('Array of results', respose))
.catch(e=>console.error(e));