import React from "react";
 import BotCard from "./BotCard";

 function BotCollection({ bots, onEnlist, onDischarge }) {
    return (
      <div className="ui four column grid">
        <div className="bot-grid">
        {bots.map(bot => (
           <BotCard
             key={bot.id}
             bot={bot}
             onClick={() => onEnlist(bot)}
             onDischarge={() => onDischarge(bot)}
           />
         ))}
       </div>
     </div>
   );
}

export default BotCollection