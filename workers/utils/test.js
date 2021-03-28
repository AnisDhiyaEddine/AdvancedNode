import shell from "exec-sh";
import fs from "fs";
/* console.log("let's execute 10 times async code ;) ");

(async()=>{
    let res;
    for(let j=0 ; j<5 ; j++){
        for(let i=0 ; i<10 ; i++){
            res =  await asyncProcess();
            console.log(res + j + i);
         }   
    }
     
})()

function asyncProcess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("hello khaoulaaa"); 
        }, 500);
    })
  } */

  //Execute a promise after another

/*   const promiseOne = () => new Promise((resolve,reject)=> {
      setTimeout(() => {
          console.log("PromiseOne should be executed First")
          resolve(true);
      }, 2000);
  })

  const promiseTwo = () => new Promise((resolve,reject)=> {
    setTimeout(() => {
        console.log("PromiseTwo should be executed second")
        resolve(true);
    }, 500);
})


const script = async ()=>{
    console.log("let's do the magic");
    await promiseOne();
    await promiseTwo();
    console.log("synchronous code is hanging ...");
}; */


/* const script = async () => {
   const response =  fs.readdirSync("./public/folder");
   console.log(response);
} */

//async here is a syntax sugar ;)
const promiseThree = async () => new Promise( (resolve,reject) => {
    let i = 0;
    const intervalID = setInterval(()=>{
        if(i == 5 ) {
            resolve(true);
            clearInterval(intervalID);
        };
        console.log("hello baee ",i);
        i++;
    },1000)
})

const script = async () => {
    await promiseThree();
    fs.writeFileSync("./state.json",JSON.stringify({
        years : [],
        monthes : [],
        days : [],
        folders : []
    }))
    console.log("ya draa !! haha ");
}

script();