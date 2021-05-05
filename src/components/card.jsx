import React from 'react'

function Card(props) {
    return (
        <div className='tags col-md-3 col-12'>
            <header>{props.header}</header>
            <main>{props.main}</main>
        </div>
    )
}

export default Card
