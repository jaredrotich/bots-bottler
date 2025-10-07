export const API_URL = "http://localhost:8001/bots";

export const fetchBots = async () => {
  const res = await fetch(API_URL);
  return res.json();
};
