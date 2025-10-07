import React, { useEffect, useState } from "react";
import BotCollection from "../components/BotCollection";
import YourBotArmy from "../components/YourBotArmy";
import "../styles/layout.css";

const BotsPage = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
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

      <BotCollection bots={filteredBots} onEnlist={enlistBot} />
    </div>
  );
};

export default BotsPage;
