import type React from "react"
import type { DayPlan } from "../types/itinerary"
import { format } from "date-fns"

interface ItineraryTimelineProps {
  day: DayPlan
  onActivitySelect: (activityId: string) => void
  selectedActivity?: string
}

const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({ day, onActivitySelect, selectedActivity }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">{format(new Date(day.date), "EEEE, MMMM d, yyyy")}</h3>
      <div className="space-y-4">
        {day.activities.map((activity) => (
          <div
            key={activity.id}
            className={`p-4 rounded-lg border transition-colors cursor-pointer ${
              selectedActivity === activity.id
                ? "bg-indigo-50 border-indigo-500"
                : "bg-white hover:bg-gray-50 border-gray-200"
            }`}
            onClick={() => onActivitySelect(activity.id)}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold">{activity.name}</h4>
                <p className="text-sm text-gray-500">
                  {activity.timeSlot.start} - {activity.timeSlot.end}
                </p>
              </div>
              <span className="text-sm font-medium text-gray-600">
                {activity.cost.amount} {activity.cost.currency}
              </span>
            </div>
            <p className="text-sm text-gray-600">{activity.description}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {activity.category}
              </span>
              <span className="text-sm text-gray-500">Duration: {activity.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItineraryTimeline

