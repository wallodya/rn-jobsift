import { View, Text, SafeAreaView, ScrollView } from "react-native"
import React from "react"
import { Stack, useRouter } from "expo-router"
import { COLORS, SIZES, icons, images } from "../constants"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"

const Home = () => {
	const router = useRouter()
    
    return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLORS.lightWhite,
			}}
		>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.lightWhite,
					},
					headerTitle: "Home",
					headerTitleAlign: "center",
					headerLeft: () => {
						return (
							<ScreenHeaderBtn
								iconUrl={icons.menu}
								dimension="80%"
                                handlePress={() => console.log("press")}
							/>
						)
					},
					headerRight: () => {
						return (
							<ScreenHeaderBtn
								iconUrl={images.profile}
								dimension="100%"
                                handlePress={() => console.log("press")}
							/>
						)
					},
					headerShadowVisible: false,
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome />
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
