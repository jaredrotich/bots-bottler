import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <section className="your-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 && <p>No bots enlisted yet!</p>}
      <div className="bot-grid">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => onRelease(bot)}
            handleDelete={() => onDischarge(bot.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default YourBotArmy;
