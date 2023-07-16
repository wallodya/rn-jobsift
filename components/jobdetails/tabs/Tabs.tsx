import React, { Dispatch } from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"

import styles, { getTabStyles } from "./tabs.style"
import { SIZES } from "../../../constants"

type JobDetailsTabsProps = {
	tabs: string[]
	activeTab: string
	setActiveTab: Dispatch<React.SetStateAction<string>>
}

const TabButton = ({
	name,
	activeTab,
    handleSelectTab
}: {
	name: string
	activeTab: string
	handleSelectTab: () => void
}) => {
    const tabStyles = getTabStyles(name, activeTab)
	return (
		<TouchableOpacity onPress={handleSelectTab} style={tabStyles.btn}>
			<Text style={tabStyles.btnText}>{name}</Text>
		</TouchableOpacity>
	)
}

const Tabs = ({ tabs, activeTab, setActiveTab }: JobDetailsTabsProps) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={tabs}
				renderItem={({ item }) => (
					<TabButton
						name={item}
						activeTab={activeTab}
						handleSelectTab={() => setActiveTab(item)}
					/>
				)}
                keyExtractor={item => item}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    columnGap: SIZES.small / 2
                }}
                horizontal
			/>
		</View>
	)
}

export default Tabs
