import { GoogleGenerativeAI } from "@google/generative-ai"
import type { Itinerary } from "../types/itinerary"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function generateTravelPlan(
  destination: string,
  startDate: string,
  endDate: string,
  preferences: string[],
  budget?: { amount: number; currency: string },
): Promise<Itinerary> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" })

  const prompt = `
    Act as an expert travel planner and generate a detailed travel itinerary with the following specifications:
    
    Destination: ${destination}
    Dates: From ${startDate} to ${endDate}
    Preferences: ${preferences.join(", ")}
    ${budget ? `Budget: ${budget.amount} ${budget.currency}` : ""}

    Please provide a detailed day-by-day itinerary in the following JSON format:
    {
      "id": "unique-id",
      "destination": "city-name",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "days": [
        {
          "date": "YYYY-MM-DD",
          "activities": [
            {
              "id": "unique-activity-id",
              "name": "activity-name",
              "description": "detailed-description",
              "duration": "duration-in-hours",
              "location": {
                "name": "location-name",
                "coordinates": {
                  "lat": latitude,
                  "lng": longitude
                }
              },
              "category": "activity-category",
              "cost": {
                "amount": cost-amount,
                "currency": "currency-code"
              },
              "timeSlot": {
                "start": "HH:MM",
                "end": "HH:MM"
              }
            }
          ]
        }
      ],
      "totalCost": {
        "amount": total-cost-amount,
        "currency": "currency-code"
      }
    }

    Consider the following:
    1. Include a mix of activities based on the preferences
    2. Account for travel time between locations
    3. Include meal times at recommended local restaurants
    4. Ensure the schedule is realistic and not too packed
    5. Include actual coordinates for all locations
    6. Provide detailed descriptions for each activity
    7. Consider local opening hours and best times to visit
    8. Include cost estimates in the local currency
  `

  try {
    const result = await model.generateContent(prompt)
    const response = await result.response
    const itinerary = JSON.parse(response.text())
    return itinerary
  } catch (error) {
    console.error("Error generating travel plan:", error)
    throw new Error("Failed to generate travel plan")
  }
}

