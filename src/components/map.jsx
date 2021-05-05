import { icon } from "leaflet";
import React from "react";
import loactionI from "../images/icon-location.svg";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

function LocationMarker(props) {
  var marker = icon({
    iconUrl: loactionI,
    iconSize: [46, 56],
  });
  const map = useMapEvents({});
  map.flyTo(props.position, map.getZoom());
  return props.position === null ? null : (
    <Marker position={props.position} icon={marker}></Marker>
  );
}

function Map(props) {
  return (
    <div className="fluid-container map">
      <MapContainer
        className="map"
        center={props.position}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={props.position} />
      </MapContainer>
    </div>
  );
}

export default Map;
