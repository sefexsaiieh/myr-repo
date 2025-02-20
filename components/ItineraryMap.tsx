import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function ItineraryMap({ activities }) {
  const center = activities[0].location

  return (
    <MapContainer center={[center.lat, center.lng]} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {activities.map((activity) => (
        <Marker key={activity.id} position={[activity.location.lat, activity.location.lng]}>
          <Popup>{activity.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

