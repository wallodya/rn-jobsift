import React, { useEffect, useState } from "react"
import {
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	FlatList,
} from "react-native"

import styles from "./popularjobs.style"
import { useRouter } from "expo-router"
import { COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import useFetch from "../../../hooks/use-fetch"

const PopularJobs = () => {
	const router = useRouter()
    const [selectedJobId, setSelectedJobId] = useState<string>("")

	const { data, isError, isLoading } = useFetch("search", {
		query: "React developer",
		page: 1,
	})

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popular jobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size={"large"} color={COLORS.primary} />
				) : isError ? (
					<Text>Something went wrong</Text>
				) : (
					<FlatList
						data={data}
						renderItem={({ item }) => (
							<PopularJobCard
								jobItem={item}
                                selectedJobId={selectedJobId}
								handlePress={() => {
									setSelectedJobId(item.job_id)
                                    router.push(`/job-details/${item.job_id}`)
								}}
							/>
						)}
                        keyExtractor={item => item.job_id}
						contentContainerStyle={{ columnGap: SIZES.medium }}
						showsHorizontalScrollIndicator={false}
						horizontal
					/>
				)}
			</View>
		</View>
	)
}

export default PopularJobs
