import React from "react"
import { useNavigate } from "react-router"
import { MapContainer, TileLayer, Marker, Popup,FeatureGroup } from "react-leaflet"
import ankaraDistricts from "../data/ankaraDistricts.json"
import { EditControl} from "react-leaflet-draw"
import "leaflet-draw/dist/leaflet.draw.css"
import L from "leaflet"
const HomePage = () => {
 const handleCreated=(e)=>console.log(e)

  return (
    <MapContainer center={[39.93, 32.85]} zoom={13} scrollWheelZoom={true}>
       <FeatureGroup>
        <EditControl position="topright" onCreated={handleCreated}/>
      </FeatureGroup> 

      
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {ankaraDistricts.map((ankara) => (
        <Marker key={ankara.id} position={[ankara.latitude, ankara.longitude]}>
          <Popup position={[ankara.latitude, ankara.longitude]}>
            <div>
              <h2>{"Bölge: " + ankara.name}</h2>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default HomePage
