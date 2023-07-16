import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { checkImageURL } from '../../../utils/check-image-url'
import { icons } from '../../../constants'

type CompanyProps = {
    logo: string,
    jobTitle: string,
    companyName: string,
    location: string
}

const Company = ({ logo, jobTitle, companyName, location }: CompanyProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.logoBox}>
				<Image
					source={{
						uri: checkImageURL(logo)
							? logo
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
					}}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</View>
			<View style={styles.jobTitleBox}>
				<Text style={styles.jobTitle}>
					{jobTitle}
				</Text>
			</View>

			<View style={styles.companyInfoBox}>
				<Text style={styles.companyName}>{companyName} /</Text>
				<View style={styles.locationBox}>
					<Image
						source={icons.location}
						style={styles.locationImage}
						resizeMode="contain"
					/>
					<Text style={styles.locationName}>{location}</Text>
				</View>
			</View>
		</View>
	)
}

export default Company