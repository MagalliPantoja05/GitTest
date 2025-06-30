import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets, onLike }) => {
  return (
    <div className="tweet-list-container">
      {tweets.length === 0 ? (
        <p>No hay tweets todavía. ¡Sé el primero en publicar!</p>
      ) : (
        tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
        ))
      )}
    </div>
  );
};

export default TweetList;