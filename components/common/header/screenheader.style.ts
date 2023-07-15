import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

// const styles = StyleSheet.create({
// 	btnContainer: {
// 		width: 40,
// 		height: 40,
// 		backgroundColor: COLORS.white,
// 		borderRadius: SIZES.small / 1.25,
// 		justifyContent: "center",
// 		alignItems: "center",
// 	},
// 	btnImg: (dimension: string): StyleProp<ImageStyle> => ({
// 		width: dimension,
// 		height: dimension,
// 		borderRadius: SIZES.small / 1.25,
// 	}),
// })

export const getButtonStyles = (
	dimension: string
): { btnContainer: ViewStyle; btnImg: ImageStyle } => {
	return StyleSheet.create({
		btnContainer: {
			width: 40,
			height: 40,
			backgroundColor: COLORS.white,
			borderRadius: SIZES.small / 1.25,
			justifyContent: "center",
			alignItems: "center",
		},
		btnImg: {
			width: dimension,
			height: dimension,
			borderRadius: SIZES.small / 1.25,
		},
	})
}

// export default styles;
