import React from 'react'
import { View, Text, TouchableOpacity, GestureResponderEvent, Image } from 'react-native'

import getJobCardStyles from './popularjobcard.style'
import { JobData } from '../../../../types/api.types'
import { checkImageURL } from '../../../../utils/check-image-url'

type PopularJobCardProps = {
    jobItem: JobData,
    selectedJobId: string,
    handlePress: (event: GestureResponderEvent) => void
}

const PopularJobCard = ({ jobItem,selectedJobId, handlePress }: PopularJobCardProps) => {
    const styles = getJobCardStyles(selectedJobId, jobItem)
	return (
		<TouchableOpacity style={styles.container} onPress={handlePress}>
			<TouchableOpacity style={styles.logoContainer}>
				<Image
					source={{
						uri: checkImageURL(jobItem.employer_logo)
							? jobItem.employer_logo
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
					}}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</TouchableOpacity>
			<Text style={styles.companyName} numberOfLines={1}>
				{jobItem.employer_name}
			</Text>
			<View style={styles.infoContainer}>
				<Text style={styles.jobName} numberOfLines={1}>
					{jobItem.job_title}
				</Text>
				<Text style={styles.location}>{jobItem.job_country}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default PopularJobCard