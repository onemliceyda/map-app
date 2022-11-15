import React from "react"
import { useNavigate } from "react-router"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import ankaraDistricts from "../data/ankaraDistricts.json"

const HomePage = () => {
  console.log(ankaraDistricts)

  return (
    <MapContainer
      center={[42.585444, 13.257684]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {ankaraDistricts.map((ankara) => (
        <Marker key={ankara.id} position={[ankara.latitude, ankara.longitude]}></Marker>
      ))}
    </MapContainer>
  )
}

export default HomePage
