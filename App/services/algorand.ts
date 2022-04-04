
import http from "./http";


export const recoverAccount=async(body: any)=>{
    try{
        const res = await http.post(body)
        return res
    
    }catch(e){
        console.log(e)
        throw(e)
    }
       
}


export  async function transactionHistory(body: object){
  try{       
        const res = await http.post(body)
        return res
    }catch(e) {
        console.log(e);
        throw(e)
    }
   
}

export const assetInfo=async(body: object)=>{
   try{
        const res = await http.post(body)
        return res
   }catch(e){
        console.log(e);
        throw(e)
    };
}



export const setPassword= async(body: object)=> {
    try {  
        const res = await http.post(body)
        return res
    }
    catch (e) {        
        console.log(e);
        throw(e)
    }
}





export const createAccount= async(body: object)=> {
    try {  
        const res = await http.post(body)
        return res
    }
    catch (e) {        
        console.log(e);
        throw(e)
    }
}


export const loginAccount= async(body: object)=> {
    try {  
        const res = await http.post(body)
        return res
    }
    catch (e) {        
        console.log(e);
        throw(e)
    }
}



export const accountInfo= async (body: object)=>{
    try{
        const res = await http.post(body)
        return res
    }
    catch(e){
        return {error: e}
    }
}

// createAccount()

export const sendJSR=async (body: object)=>{
    
    try{
        const res = await http.post(body)
        return res
    }
    catch(e){
        return {error: e}
    }
}


export async function optIn(body: object) {
    try{
        const res = await http.post(body)
        return res
    }
    catch(e){
        return {error: e}
    }
    
}

export async function exchangeRate(args: object) {
    try{
        const res = await http.post(args)
        return res
    }
    catch(e){
        return {error: e}
    }
    
}


