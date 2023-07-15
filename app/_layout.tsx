import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Stack } from "expo-router"
import { useFonts } from "expo-font"

const StackLayout = () => {
    const [fontsLoaded] = useFonts({
		DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
		DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
		DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
	})

    if (!fontsLoaded) {
        return null
    }

	return (
		<Stack>
			<Stack.Screen name="home" />
		</Stack>
	)
}

export default StackLayout
