import React, { useState, useEffect } from "react";
import TweetList from "../components/TweetList";
import TweetForm from "../components/TweetForm";

const Home = ({ user, logout }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    try {
      const storedTweets = JSON.parse(localStorage.getItem("tweets"));
      setTweets(Array.isArray(storedTweets) ? storedTweets : []);
    } catch (error) {
      console.error("Error al cargar tweets desde localStorage:", error);
      localStorage.removeItem("tweets");
      setTweets([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("tweets", JSON.stringify(tweets));
    } catch (error) {
      console.error("Error al guardar tweets en localStorage:", error);
    }
  }, [tweets]);

  const addTweet = (text) => {
    if (!user) {
        alert("Necesitas iniciar sesión para publicar un tweet.");
        return;
    }
    const newTweet = {
      id: Date.now(),
      author: user.username,
      text,
      likes: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <div className="page-container">
      <h1>Línea de Tiempo de Twitter</h1>
      {user ? (
        <div className="welcome-message">
          <p>¡Hola, **{user.username}**! ¿Qué estás pensando?</p>
          <TweetForm onAddTweet={addTweet} />
        </div>
      ) : (
        <p>Inicia sesión para poder publicar tweets y ver tu perfil.</p>
      )}
      <TweetList tweets={Array.isArray(tweets) ? tweets : []} onLike={likeTweet} />
    </div>
  );
};

export default Home;
