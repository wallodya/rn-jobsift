import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({title, points}: { title: string; points: string[] }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title} :</Text>
            <View style={styles.pointsContainer}>
                {
                    points.map((p, index) => (
                        <View style={styles.pointWrapper} key={index}>
                            <View style={styles.pointDot}></View>
                            <Text style={styles.pointText}>{p}</Text>
                        </View> 
                    ))
                }
            </View>
		</View>
	)
}

export default Specifics