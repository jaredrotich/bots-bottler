import React from "react";

const BotCard = ({ bot, handleClick, handleDelete }) => {
  const { name, avatar_url, bot_class, health, damage, armor } = bot;

  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p className="class">{bot_class}</p>
      <div className="stats">
        <p>❤️ {health}</p>
        <p>⚔️ {damage}</p>
        <p>🛡️ {armor}</p>
      </div>

      {handleDelete && (
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(bot.id);
          }}
        >
          ❌
        </button>
      )}
    </div>
  );
};

export default BotCard;
