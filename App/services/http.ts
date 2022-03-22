import axios from "axios";



// const apiBaseUrl = 'https://dev-jsr-functionapp.azurewebsites.net/api/JSR-mobile-algorand-functions?code=RMBsEjnjIH9I6lTJo14hXr/WmaQwEqrTsB4EtqLygub9oW444wMCig==';
const apiBaseUrl = 'http://172.31.242.182:7071/api/JSR-mobile-algorand-functions'



export default {
  post: async (body: object) => {
    let url =  `${apiBaseUrl}`;
    try {
      let response = await axios.post(`${url}`, body);
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
      data: error.message,
  };
 
};