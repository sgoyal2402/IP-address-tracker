import React, { useEffect, useState } from "react";
import "./App.css";
import Details from "./components/detail";
import Map from "./components/map";
import SearchBox from "./components/search-box";

function App() {
  const [ip, setIp] = useState("");
  const [res, setRes] = useState();
  const [position, setPosition] = useState([]);

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_WjFdwlLYKMsyCnXOl7YwohMymQqBZ&ipAddress=${ip}`
    )
      .then((res) => res.json())
      .then((result) => {
        setRes(result);
        setIp(result.ip);
        setPosition([result.location.lat, result.location.lng]);
      });
  }, [ip]);

  if (ip !== "" && position.length !== 0) {
    return (
      <>
        <div className="fluid-container top" style={{ height: "30vh" }}>
          <div className="text-center text_h">IP Address Tracker</div>

          <SearchBox default={ip} setIp={setIp} />

          <Details detail={res} />
        </div>
        <Map position={position} />
        <div class="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.github.com/sgoyal2402">Suryansh Goyal</a>.
        </div>
      </>
    );
  }

  return (
    <div className="container text-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        alt="Loading"
      />
      {setTimeout(() => {
        "If you see Loading for long time my quota for IPYFIY is finished."
      }, 4000)}
    </div>
  );
}

export default App;
