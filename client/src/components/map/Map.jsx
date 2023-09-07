import {MapContainer, TileLayer} from "react-leaflet"
import GeoCodeMarker from "../geoCodeMarker/GeoCodeMarker"


const Map = ({address, city, country}) => {
  return (
    <MapContainer 
    center={[51.505, -0.09]}
    zoom={0.5}
    scrollWheelZoom={false}
    style={{
        height: "40vh",
        width: "100%",
        marginTop: "20px",
        zIndex: 0
    }}
    
    >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {/** Custom Component where Marker is called */}
        <GeoCodeMarker address={address} city={city} country={country}/>
    </MapContainer>
  )
}

export default Map