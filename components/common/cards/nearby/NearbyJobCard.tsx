import React from 'react'
import { View, Text, TouchableOpacity, GestureResponderEvent, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { JobData } from '../../../../types/api.types'
import { checkImageURL } from "../../../../utils/check-image-url"

const NearbyJobCard = ({
	jobItem,
    handleNavigate
}: {
	jobItem: JobData
	handleNavigate: () => void
}) => {
	return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
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

        <View style={styles.textContainer}>
            <Text style={styles.jobName} numberOfLines={1}>
                {jobItem.job_title}
            </Text>
            <Text style={styles.jobType}>{jobItem.job_employment_type}</Text>
        </View>

    </TouchableOpacity>
	)
}

export default NearbyJobCard
