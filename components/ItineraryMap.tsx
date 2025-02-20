import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import type { LatLngExpression } from "leaflet"

interface Activity {
  id: string
  name: string
  location: {
    lat: number
    lng: number
  }
}

interface ItineraryMapProps {
  activities: Activity[]
}

export default function ItineraryMap({ activities }: ItineraryMapProps) {
  const center: LatLngExpression = [activities[0].location.lat, activities[0].location.lng]

  return (
    <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
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

