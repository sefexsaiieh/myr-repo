import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"

import TravelPlanningScreen from "./screens/TravelPlanningScreen"
import ItineraryScreen from "./screens/ItineraryScreen"
import TransportationScreen from "./screens/TransportationScreen"
import CostTrackingScreen from "./screens/CostTrackingScreen"
import RecommendationsScreen from "./screens/RecommendationsScreen"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Plan") {
              iconName = focused ? "map" : "map-outline"
            } else if (route.name === "Itinerary") {
              iconName = focused ? "calendar" : "calendar-outline"
            } else if (route.name === "Transport") {
              iconName = focused ? "car" : "car-outline"
            } else if (route.name === "Costs") {
              iconName = focused ? "wallet" : "wallet-outline"
            } else if (route.name === "Recommendations") {
              iconName = focused ? "star" : "star-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tab.Screen name="Plan" component={TravelPlanningScreen} />
        <Tab.Screen name="Itinerary" component={ItineraryScreen} />
        <Tab.Screen name="Transport" component={TransportationScreen} />
        <Tab.Screen name="Costs" component={CostTrackingScreen} />
        <Tab.Screen name="Recommendations" component={RecommendationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

