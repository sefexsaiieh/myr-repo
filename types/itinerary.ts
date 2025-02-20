export interface Location {
  name: string
  coordinates: {
    lat: number
    lng: number
  }
}

export interface Activity {
  id: string
  name: string
  description: string
  duration: string
  location: Location
  category: string // e.g., 'sightseeing', 'food', 'culture'
  cost: {
    amount: number
    currency: string
  }
  timeSlot: {
    start: string
    end: string
  }
}

export interface DayPlan {
  date: string
  activities: Activity[]
}

export interface Itinerary {
  id: string
  destination: string
  startDate: string
  endDate: string
  days: DayPlan[]
  totalCost: {
    amount: number
    currency: string
  }
}

