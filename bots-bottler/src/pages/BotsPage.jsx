import React, { useEffect, useState } from "react";
import BotCollection from "../components/BotCollection";
import YourBotArmy from "../components/YourBotArmy";
import "../styles/layout.css";
import { fetchBots } from "../api"; 
const BotsPage = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBots = async () => {
      try {
        const data = await fetchBots();
        setBots(data);
      } catch {
        setError("Unable to load bots. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadBots();
  }, []);

  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
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
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
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
        <p className="loading">⚙️ Loading bots...</p>
      ) : error ? (
        <p className="error">❌ {error}</p>
      ) : filteredBots.length === 0 ? (
        <p className="no-bots">No bots available.</p>
      ) : (
        <BotCollection bots={filteredBots} onEnlist={enlistBot} />
      )}
    </div>
  );
};

export default BotsPage;
