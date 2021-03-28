import cluster from 'cluster';
import {greeting , masterHandler} from "./helpers/masterHelpers.js"
import {processHandler} from "./helpers/processesHelpers.js"

let worker;

const promise = (workers)=>{
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      console.log("notifying childrens ...");
      workers.forEach(worker => {
        worker.send("hello worker" + worker);
      })
      resolve(true);
    },1000)
  })
}

(async ()=>{
  try {
    if (cluster.isMaster) {
      //Isolate logic that should be executed only by the master
      const processesNbr = 2;
      const workers = [];

    // Fork workers and wait notification :)

    for (let i = 0; i < processesNbr; i++) {
      workers.push(cluster.fork());
    }

    await masterHandler(processesNbr,workers);
    

    } else {
      //Processes logic
      let processData;
      process.on("message",async (data) => await processHandler(data));
    }
  } catch (error) {
    console.error(error);
  }
})()


