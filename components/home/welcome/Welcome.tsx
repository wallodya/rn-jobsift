import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, GestureResponderEvent } from "react-native"

import styles, { getJobTypeTabStyles } from "./welcome.style"
import { SIZES, icons } from "../../../constants"
import { useRouter } from "expo-router"

const JOB_TYPES = [
    "Full-time",
    "Part-time",
    "Contractor"
]

const JobTypeListItem = ({
	activeType,
	item,
    handlePress
}: {
	activeType: string
	item: string
	handlePress: (event: GestureResponderEvent) => void
}) => {
	const jobTypeStyles = getJobTypeTabStyles(activeType, item)

	return (
		<TouchableOpacity style={jobTypeStyles.tab} onPress={handlePress}>
			<Text style={jobTypeStyles.tabText}>{item}</Text>
		</TouchableOpacity>
	)
}

const Welcome = () => {
    const [activeJobType, setActiveJobType] = useState<string>(JOB_TYPES[0])

    const router = useRouter()

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello, User1</Text>
				<Text style={styles.welcomeMessage}>Find your perfect job</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value=""
						onChange={() => {}}
						placeholder="What are you looking for"
					/>
				</View>

				<TouchableOpacity style={styles.searchBtn}>
					<Image
						source={icons.search}
						style={styles.searchBtnImage}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.tabsContainer}>
				<FlatList
					data={JOB_TYPES}
					renderItem={({ item }) => (
						<JobTypeListItem
							item={item}
							activeType={activeJobType}
							handlePress={() => {
								setActiveJobType(item)
								router.push(`/search/${item}`)
							}}
						/>
					)}
					keyExtractor={item => item}
					contentContainerStyle={{ columnGap: SIZES.small }}
					horizontal
				/>
			</View>
		</View>
	)
}

export default Welcome
