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
      `https://geo.ipify.org/api/v1?apiKey=at_SN1zSBdHLzpWyPazOEWQUUn5V7FC3&ipAddress=${ip}`
    )
      .then((res) => res.json())
      .then((result) => {
        setRes(result);
        setIp(result.ip);
        setPosition([result.location.lat, result.location.lng]);
      });
  }, [ip]);
  return (
    <>
      <div className="fluid-container top" style={{ height: "30vh" }}>
        <div className="text-center text_h">IP Address Tracker</div>

        {ip !== "" && <SearchBox default={ip} setIp={setIp} />}

        {ip !== "" && <Details detail={res} />}
      </div>
      {position.length !== 0 && <Map position={position} />}
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

export default App;
