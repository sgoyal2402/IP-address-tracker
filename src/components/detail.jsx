import React from 'react'
import Card from './card'

function Details(props) {
    return (
        <div className="container details">
            <div className="row">
            <Card header="IP ADDRESS" main = {props.detail.ip}/>
            <Card header="LOCATION" main = {props.detail.location.city +', ' + props.detail.location.country + '\n' + props.detail.location.postalCode}/>
            <Card header="TIMEZONE" main = {'UTC ' + props.detail.location.timezone}/>
            <Card header="ISP" main = {props.detail.isp}/>
            </div>
        </div>
    )
}

export default Details
