import React from "react";

const Tweet = ({ tweet, onLike }) => {
  return (
    <div className="tweet">
      <p className="tweet-author">@{tweet.author || "Anónimo"}</p>
      <p className="tweet-text">{tweet.text}</p>
      <button onClick={() => onLike(tweet.id)} className="like-button">
        ❤ {tweet.likes}
      </button>
    </div>
  );
};

export default Tweet;