import React, { useEffect, useState } from "react";
 import YourBotArmy from "./YourBotArmy";
 import BotCollection from "./BotCollection";

 function  BotsPage() {
    const [bots, setBots] = useState([]);
   const [army, setArmy] = useState([]);
 
   useEffect(() => {
     fetch("http://localhost:3000/bots")
       .then(res => res.json())
       .then(setBots)
       .catch(err => console.error("Fetch error:", err));
   }, []);
 
   function enlistBot(bot) {
     if (!army.find(b => b.id === bot.id)) {
       setArmy([...army, bot]);
     }
   }
 
   function releaseBot(bot) {
     setArmy(army.filter(b => b.id !== bot.id));
   }
 
   function dischargeBot(bot) {
     fetch(`http://localhost:3000/bots/${bot.id}`, {
       method: "DELETE",
     })
       .then(() => {
         setArmy(army.filter(b => b.id !== bot.id));
         setBots(bots.filter(b => b.id !== bot.id));
       })
       .catch(err => console.error("Delete error:", err));
   }
 
   return (
     <div>
        <YourBotArmy bots={army} onRelease={releaseBot} onDischarge={dischargeBot} />
        <BotCollection bots={bots} onEnlist={enlistBot} onDischarge={dischargeBot} />
     </div>
      );
    }
    
    export default BotsPage;
 