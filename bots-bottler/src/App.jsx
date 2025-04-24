import { useState, useEffect } from 'react'
import './App.css'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

// Fetch bots from db.json
useEffect(() => {
  fetch('http://localhost:3000/bots') 
    .then(res => res.json())
    .then(data => setBots(data))
    .catch(err => console.error("Failed to fetch bots:", err));
}, []);

// Enlist bot
const enlistBot = (bot) => {
  if (!army.find(b => b.id === bot.id)) {
    setArmy([...army, bot]);
  }
};

// Release bot
const releaseBot = (botId) => {
  setArmy(army.filter(b => b.id !== botId));
};

// Delete bot permanently
const deleteBot = (botId) => {
  setBots(bots.filter(b => b.id !== botId));
  setArmy(army.filter(b => b.id !== botId));
};

return (
  <div className="App">
    <h1> Bot Battlr</h1>
    <YourBotArmy army={army} onRelease={releaseBot} onDelete={deleteBot} />
    <BotCollection bots={bots} onEnlist={enlistBot} onDelete={deleteBot} />
  </div>
);
}

export default App
