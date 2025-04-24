import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army = [], onRelease, onDischarge }) {
  return (
    <div className="ui segment inverted olive bot-army">
        <div className="bot-grid">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={() => onRelease(bot.id)}
              onDischarge={() => onDischarge(bot.id)}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default YourBotArmy;
