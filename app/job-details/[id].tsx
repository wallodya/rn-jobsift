import { View, Text, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator } from "react-native"
import React, { useEffect, useState } from "react"
import { Stack, useLocalSearchParams, useRouter, useSearchParams } from "expo-router"
import useFetch from "../../hooks/use-fetch"
import { JobSearchParams } from "../../types/api.types"
import { COLORS, SIZES, icons, images } from "../../constants"
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components"
import About from "../../components/jobdetails/about/About"

const TABS = ["About", "Qualifications", "Responsibility"]

const JobDetails = () => {
    const params = useLocalSearchParams()
    const router = useRouter()

    const [activeTab, setActiveTab] = useState(TABS[0])

    const { data, isLoading, isError, refetch } = useFetch("job-details", {
        job_id: params.id as string
	})

    const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
    const handleRefresh = async () => {
        setIsRefreshing(true)
        await refetch()
        setIsRefreshing(false)
    }

    const displayTabContent = () => {
        switch (activeTab) {
            case("About"): {
                // return <Specifics title="About" points={data[0].job_highlights.Qualifications}/>
                return <JobAbout info={data[0].job_description ?? "No data provided"}/>
            }
            case("Qualifications"): {
                return <Specifics title="Qualifications" points={data[0].job_highlights.Qualifications ?? ["N/A"]}/>
            }
            case("Responsibility"): {
                return <Specifics title="Responsibilities" points={data[0].job_highlights.Responsibilities ?? ["N/A"]}/>
            }
            default: {
                return
            }
        }
    }

	return (
		<SafeAreaView
			style={{
				backgroundColor: COLORS.lightWhite,
				flex: 1,
			}}
		>
			<Stack.Screen
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: COLORS.lightWhite,
					},
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => {
						return (
							<ScreenHeaderBtn
								iconUrl={icons.left}
								dimension="60%"
								handlePress={() => router.back()}
							/>
						)
					},
					headerRight: () => {
						return (
							<ScreenHeaderBtn
								iconUrl={icons.share}
								dimension="60%"
								handlePress={() => console.log("Pressed share")}
							/>
						)
					},
				}}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl
						refreshing={isRefreshing}
						onRefresh={handleRefresh}
					/>
				}
			>
				{isLoading ? (
					<ActivityIndicator size={"large"} color={COLORS.primary} />
				) : isError ? (
					<Text>Something went wrong</Text>
				) : data.length === 0 ? (
					<Text>No data</Text>
				) : (
					<View
						style={{
							padding: SIZES.medium,
							paddingBottom: 100,
						}}
					>
						<Company
							logo={data[0].employer_logo}
							companyName={data[0].employer_name}
							location={data[0].job_country}
							jobTitle={data[0].job_title}
						/>
						<JobTabs
							tabs={TABS}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
                        {displayTabContent()}
					</View>
				)}
			</ScrollView>
            <JobFooter url={data[0]?.job_google_link ?? "https://careers.google.com/jobs/results/"}/>
		</SafeAreaView>
	)
}

export default JobDetails
