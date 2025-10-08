import axios from "axios";

const PROD_API = "https://mocki.io/v1/0380d61d-c426-4597-b08e-4e907524a0fc";

export const API_URL = PROD_API;

export const fetchBots = async () => {
  try {
    const response = await axios.get(API_URL, {
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bots:", error);
    throw error;
  }
};
