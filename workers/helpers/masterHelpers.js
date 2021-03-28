// ALL logic should be wrapped withing functions :)
import fs from "fs";
import { chunkify } from "../utils/utilities.js"
export const greeting = () => console.log("hello world just the master should see this :)");

const handleStructure = async (nbProcesses) => {
    let rawData = JSON.parse(fs.readFileSync("./data/structure.json"));
    rawData = chunkify(rawData,nbProcesses,true);
    await simulateCalcule();
}

const loadState = async (nbProcesses) => {
    let rawData = JSON.parse(fs.readFileSync("./data/state.json"));
    console.log(rawData.length);
}

export const masterHandler = async (nbProcesses,workers) => {
    await handleStructure(nbProcesses);
    notifyWorkers(workers);
    loadState();
}

export const notifyWorkers = (workers = []) => {
    for(let i = 0 ; i < workers.length ; i++){
        workers[i].send(i);
    }
}

const simulateCalcule = () => new Promise((resolve,reject) => {
    console.log("calculating ...");
    setTimeout(()=>{
        resolve(true);
    },3000);
})