import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, onEnlist }) => {
  return (
    <section className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.length > 0 ? (
          bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleClick={() => onEnlist(bot)} />
          ))
        ) : (
          <p>No bots available.</p>
        )}
      </div>
    </section>
  );
};

export default BotCollection;
