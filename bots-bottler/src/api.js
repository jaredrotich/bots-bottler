import axios from "axios";

const LOCAL_API = "http://localhost:8001/bots";
const PROD_API = "https://mocki.io/v1/0380d61d-c426-4597-b08e-4e907524a0fc";


export const fetchBots = async () => {
  try {
    
    const localResponse = await axios.get(LOCAL_API, {
      timeout: 2000, 
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
    console.log("✅ Loaded bots from LOCAL server");
    return localResponse.data;

  } catch (localError) {
    console.warn("⚠️ Local backend unavailable, switching to Mocki API...");
    
    try {
      
      const prodResponse = await axios.get(PROD_API, {
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      });
      console.log("✅ Loaded bots from Mocki API");
      return prodResponse.data;

    } catch (prodError) {
      console.error("❌ Both sources failed:", prodError);
      throw new Error("Unable to load bots from any source.");
    }
  }
};
