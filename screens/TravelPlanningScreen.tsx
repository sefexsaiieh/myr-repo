"use client"

import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"

const TravelPlanningScreen = () => {
  const [destination, setDestination] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [showStartDatePicker, setShowStartDatePicker] = useState(false)
  const [showEndDatePicker, setShowEndDatePicker] = useState(false)

  const handlePlanTrip = () => {
    // TODO: Implement AI-powered trip planning logic
    console.log("Planning trip to", destination, "from", startDate, "to", endDate)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Your Trip</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter destination"
        value={destination}
        onChangeText={setDestination}
      />
      <Button title="Select Start Date" onPress={() => setShowStartDatePicker(true)} />
      {showStartDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowStartDatePicker(false)
            if (selectedDate) setStartDate(selectedDate)
          }}
        />
      )}
      <Button title="Select End Date" onPress={() => setShowEndDatePicker(true)} />
      {showEndDatePicker && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowEndDatePicker(false)
            if (selectedDate) setEndDate(selectedDate)
          }}
        />
      )}
      <Button title="Plan Trip" onPress={handlePlanTrip} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
})

export default TravelPlanningScreen

