import { useEffect, useState } from "react";
import React from "react";
import getNowPlayingItem from "./spotifyAPI.js";
import SpotifyLogo from "./SpotifyLogo.js";
import PlayingAnimation from "./PlayingAnimation.js";

export const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNowPlayingItem(
          props.client_id,
          props.client_secret,
          props.refresh_token
        );
        setResult(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching now playing item:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [props.client_id, props.client_secret, props.refresh_token]);

  return (
    <div>
      {loading && <p>Loading...</p>}

      {!loading &&
        result.isPlaying(
          <div>
            <div>
              <SpotifyLogo />
              <span>Now playing</span>
            </div>
            <div>
              <img
                src={result.albumImageUrl}
                alt={`${result.title} album art`}
              />
              <PlayingAnimation />
              <a href={result.songUrl} target="_blank">
                {result.title}
              </a>
              <p>{result.artist}</p>
            </div>
          </div>
        )}
    </div>
  );
};

export default SpotifyNowPlaying;
