import React, { useState } from 'react';



function SearchBox(props){

    const [input, setInput] = useState(props.default);
    

    function handleChange(event){

        setInput(event.target.value);

    }
    
    return <>

    <input type="text" value={input} onChange = {handleChange} />
    
    </>;
}

export default SearchBox;