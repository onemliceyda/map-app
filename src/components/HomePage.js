import React from "react"
import { useNavigate } from "react-router"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const HomePage = () => {
  return (
    <MapContainer
      center={[42.585444, 13.257684]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default HomePage
