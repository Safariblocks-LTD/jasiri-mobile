import axios from "axios";
import {token} from "./auth";



const apiBaseUrl = 'https://algoindexer.algoexplorerapi.io';

const baseConfig = () => {
  const config = {};
 
  return config;
};

export default {
  get: async (params: {}, endpoint: string, options: {}) => {
    
    let qsParts = [''];
   
    let paramString = qsParts.length === 0 ? "" : `?${qsParts.join("&")}`;

   
   
    let url = (endpoint || "").toLowerCase().startsWith("http")
      ? `${endpoint}`
      : `${apiBaseUrl}/${endpoint}`;

    try {
      let response = await axios.get(`${url}${paramString}`, baseConfig());
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  /*
    options: {
      requestConfig: {},
      results: string (csv, zip) || object ({operation: string, configItem1: null, configItem2: null}) || [strings/objects/mix]
    }
  */
  post: async () => {
   
  },
};

function errorHandler (error: any){
  if (error.response) {
    return {
      errored: true,
      message: "Server responded with an error",
      data: error.response.data,
  };
} else if (error.request) {
    return {
      errored: true,
      message: 'Request failed, check your internet connection',
  };
  } else {
    return { 
      message: "Application failure.",
      errored: true
  };
  }
};