import React, { useEffect, useState } from "react";
import BotCollection from "../components/BotCollection";
import YourBotArmy from "../components/YourBotArmy";
import "../styles/layout.css";


const API_URL = "https://my-json-server.typicode.com/jaredrotich/bots-bottler/bots";

const BotsPage = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch bots");
        const data = await res.json();
        setBots(data);
      } catch (err) {
        console.error("Error fetching bots:", err);
        setError("Unable to load bots. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBots();
  }, []);

  
  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  
  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  
  const dischargeBot = (id) => {
    setBots(bots.filter((b) => b.id !== id));
    setArmy(army.filter((b) => b.id !== id));
  };

 
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  
  const filteredBots =
    filter === "All" ? bots : bots.filter((bot) => bot.bot_class === filter);

  return (
    <div className="bots-page">
      <YourBotArmy
        army={army}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />

      <div className="filter-bar">
        <label>Filter by Class: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Captain">Captain</option>
          <option value="Witch">Witch</option>
        </select>
      </div>

      
      {loading ? (
        <p className="loading">Loading bots...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <BotCollection bots={filteredBots} onEnlist={enlistBot} />
      )}
    </div>
  );
};

export default BotsPage;
