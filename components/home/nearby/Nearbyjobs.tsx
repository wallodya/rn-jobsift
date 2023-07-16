import React, { useEffect, useState } from "react"
import {
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	FlatList,
} from "react-native"

import styles from "./nearbyjobs.style"
import { useRouter } from "expo-router"
import { COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../common/cards/nearby/NearbyJobCard"
import useFetch from "../../../hooks/use-fetch"
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard"

const NearbyJobs = () => {
	const router = useRouter()

	const { data, isError, isLoading } = useFetch("search", {
		query: "React developer",
		page: 1,
	})

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Nearby jobs</Text>
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
					data.map(j => (
						<NearbyJobCard
							jobItem={j}
							key={j.job_id}
							handleNavigate={() =>
								router.push(`/job-details/${j.job_id}`)
							}
						/>
					))
				)}
			</View>
		</View>
	)
}

export default NearbyJobs
