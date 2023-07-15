import React from "react"
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ImageSourcePropType,
	GestureResponderEvent,
} from "react-native"

import { getButtonStyles } from "./screenheader.style"

type ScreenHeaderBtnProps = {
	dimension: string
	iconUrl: ImageSourcePropType
	handlePress: (event: GestureResponderEvent) => void
}

const ScreenHeaderBtn = ({
	iconUrl,
	dimension,
	handlePress,
}: ScreenHeaderBtnProps) => {
	return (
		<TouchableOpacity
			style={getButtonStyles(dimension).btnContainer}
			onPress={handlePress}
		>
			<Image
				source={iconUrl}
				resizeMode="cover"
				style={getButtonStyles(dimension).btnImg}
			/>
		</TouchableOpacity>
	)
}

export default ScreenHeaderBtn
