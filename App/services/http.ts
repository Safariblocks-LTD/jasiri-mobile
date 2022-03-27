import axios from "axios";



// const apiBaseUrl = 'https://dev-jsr-functionapp.azurewebsites.net/api/JSR-mobile-algorand-functions?code=RMBsEjnjIH9I6lTJo14hXr/WmaQwEqrTsB4EtqLygub9oW444wMCig==';
const apiBaseUrl = 'http://172.19.37.247:7071/api/JSR-mobile-algorand-functions'



export default {
  post: async (body: object) => {
    let url =  `${apiBaseUrl}`;
    try {
      const response = await axios.post(`${url}`, body);

      const res = JSON.parse(response.data)

      if(res.errored){
        return errorHandler(res)
      }

      return response.data;
    } catch (error) {
      
      return errorHandler(error);
    }
  },


};

function errorHandler (error: any){
  
 
    return {
      errored: true,
      message: "Server responded with an error",
      data: error.message || error.data,
  };
 
};