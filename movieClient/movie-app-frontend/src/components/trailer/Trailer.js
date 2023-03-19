import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./trailer.css";

import React from "react";

const Trailer = () => {
  let params = useParams();
  let key = params.ytTrailerId;

  console.log(key);

  return (
    <div className="react-player-container">
      {<ReactPlayer
          controls="true"
          playing={true}
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
        />}
    </div>
  );
};

export default Trailer;
