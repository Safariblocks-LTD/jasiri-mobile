import axios from "axios";



const apiBaseUrl = 'https://dev-jsr-functionapp.azurewebsites.net/api/JSR-mobile-algorand-functions?code=RMBsEjnjIH9I6lTJo14hXr/WmaQwEqrTsB4EtqLygub9oW444wMCig==';
// const apiBaseUrl = 'http://172.30.76.229:7071/api/JSR-mobile-algorand-functions'




export default {
  post: async (args: object) => {
    let url =  `${apiBaseUrl}`;
    try {
      const response = await axios.post(`${url}`, args);

      const res = response.data

      if(res.errored){
        return errorHandler(res)
      }

      return response.data;
    } catch (error) {
      
      return errorHandler({data: error.message});
    }
  },

  


};

function errorHandler (error: any){
  
 
    return {
      errored: true,
      message: "Server responded with an error",
      data:  error.data,
  };
 
};