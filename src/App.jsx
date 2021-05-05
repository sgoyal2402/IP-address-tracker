import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/search-box';

function App() {
  const [ip, setIp] = useState('');
    const [res, setRes] = useState();
    
    useEffect(() => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_SN1zSBdHLzpWyPazOEWQUUn5V7FC3&ipAddress=${ip}`)
      .then((res) => res.json())
      .then((result) => {
        setRes(result);
        setIp(result.ip);
        console.log(result.ip);
      });
  }, [ip]);
  return (
    <div className='fluid-container top' style={{height: '30vh'}}>

      <div className="text-center text_h">
        IP Address Tracker
      </div>

      { ip!=='' && <SearchBox default={ip} setIp = {setIp}/>}

      
    </div>
  );
}

export default App;
