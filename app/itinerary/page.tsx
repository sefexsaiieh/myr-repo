"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const ItineraryMap = dynamic(() => import("../../components/ItineraryMap"), { ssr: false })

export default function ItineraryPage() {
  const [itinerary, setItinerary] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you'd fetch the itinerary from your API
    setTimeout(() => {
      setItinerary({
        destination: "Paris",
        startDate: "2023-07-01",
        endDate: "2023-07-07",
        activities: [
          { id: "1", name: "Eiffel Tower", location: { lat: 48.8584, lng: 2.2945 } },
          { id: "2", name: "Louvre Museum", location: { lat: 48.8606, lng: 2.3376 } },
          { id: "3", name: "Notre-Dame Cathedral", location: { lat: 48.853, lng: 2.3499 } },
        ],
      })
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <div>Loading itinerary...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Itinerary</h1>
      {itinerary && (
        <>
          <p>Destination: {itinerary.destination}</p>
          <p>
            Dates: {itinerary.startDate} to {itinerary.endDate}
          </p>
          <div className="h-96 mt-4">
            <ItineraryMap activities={itinerary.activities} />
          </div>
        </>
      )}
    </div>
  )
}

