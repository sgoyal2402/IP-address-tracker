import React, { useState } from 'react';
import arrow from '../images/icon-arrow.svg';


function SearchBox(props){

    const [input, setInput] = useState();
    

    function handleChange(event){

        setInput(event.target.value);

    }

    function handleClick(){

        props.setIp(input);

    }

    
    return <>
    <div className="container text-center mt-3">
    <input type="text" value={input} onChange = {handleChange} placeholder="Search for any IP address or domain" />
    <button onClick = {handleClick}> <img src={arrow} width='11' alt="Go"/> </button>
    </div>
    </>;
}

export default SearchBox;