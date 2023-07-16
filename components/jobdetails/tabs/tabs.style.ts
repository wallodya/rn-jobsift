import { StyleSheet } from "react-native"

import { COLORS, SHADOWS, SIZES } from "../../../constants"

export const getTabStyles = (name: string, activeTab: string) => {
	return StyleSheet.create({

		btn: {
			paddingVertical: SIZES.medium,
			paddingHorizontal: SIZES.xLarge,
			backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
			borderRadius: SIZES.medium,
			marginLeft: 2,
			...SHADOWS.medium,
			shadowColor: COLORS.white,
		},
		btnText: {
			fontFamily: "DMMedium",
			fontSize: SIZES.small,
			color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
		},
	})
}

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.small,
        marginBottom: SIZES.small / 2,
    },
})

export default styles
