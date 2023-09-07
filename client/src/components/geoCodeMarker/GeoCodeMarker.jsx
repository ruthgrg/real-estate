import {useState, useEffect} from"react"
import {Marker, Popup, useMap} from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import * as ELG from "esri-leaflet-geocoder"

let defaultIcon = L.icon({
    iconUrl : icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = defaultIcon;
const GeoCodeMarker = ({address, city, country}) => {
    const map = useMap();
    const [position, setPosition] = useState([60, 19]);
    useEffect(() => {
        // This library translate how string address to geocode
        ELG.geocode().text(`${address} ${city} ${country}`).run((err, results, response) => {
            if(results?.results.length > 0) {
                const {lat, lng} = results?.results[0].latlng;
                setPosition([lat, lng]);
                map.flyTo([lat, lng], 6); // 6 is the zoom length
            }
        }); 
    }, [address]);

  return (
    <Marker position={position} icon={defaultIcon}>
        <Popup/>
    </Marker>
  )
}

export default GeoCodeMarker