import { View, Text } from "react-native"
import React from "react"
import { Redirect } from "expo-router"

const StartPage = () => {
	return <Redirect href={"/home"} />
}

export default StartPage
