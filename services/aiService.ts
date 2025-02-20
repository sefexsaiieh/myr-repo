import axios from "axios"

const API_KEY = "your-ai-service-api-key"
const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions"

export const generateItinerary = async (destination: string, startDate: Date, endDate: Date, preferences: string[]) => {
  try {
    const prompt = `Generate a detailed itinerary for a trip to ${destination} from ${startDate.toDateString()} to ${endDate.toDateString()}. The traveler's preferences are: ${preferences.join(", ")}.`

    const response = await axios.post(
      API_URL,
      {
        prompt,
        max_tokens: 500,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    )

    return response.data.choices[0].text.trim()
  } catch (error) {
    console.error("Error generating itinerary:", error)
    throw error
  }
}

