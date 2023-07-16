import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import {
	FlatList,
	SafeAreaView,
	View,
	Text,
	ActivityIndicator,
	TouchableOpacity,
	Image,
} from "react-native"
import { NearbyJobCard, ScreenHeaderBtn } from "../../components"
import { COLORS, SIZES, icons } from "../../constants"
import useFetch from "../../hooks/use-fetch"
import { useEffect, useState } from "react"
import styles from "../../styles/search"

const useSearchPagination = (query: string) => {
    const [page, setPage] = useState<number>(1)
    const { data, refetch, isLoading, isError } = useFetch("search", {
        query,
        page,
    })  

    useEffect(() => {
        refetch()
    }, [page])

    const nextPage = () => {
        setPage(p => p + 1)
    }

    const previousPage = () => {
        if (page <= 1) {
            return
        }
        setPage(p => p - 1)
    }

    return {
        page,
        nextPage,
        previousPage,
        isLoading,
        isError,
        data
    }
}

const SearchResult = () => {
    const { query } = useLocalSearchParams()
	const router = useRouter()
    const { data, isLoading, isError, nextPage, previousPage, page } =
		useSearchPagination(!Array.isArray(query) ? query : "")
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
					title: "Search",
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
				}}
			/>
			<FlatList
				data={data}
				renderItem={({item}) => (
					<NearbyJobCard
						jobItem={item}
						key={item.job_id}
						handleNavigate={() =>
							router.push(`/job-details/${item.job_id}`)
						}
					/>
				)}
                keyExtractor={item => item.job_id}
                contentContainerStyle={{
                    padding: SIZES.medium, 
                    rowGap: SIZES.medium
                }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{query}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {
                            isLoading
                                ? <ActivityIndicator size='large' color={COLORS.primary} />
                                : isError
                                ? <Text>Oops something went wrong</Text>
                                : <></>
                            }
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                    <TouchableOpacity
                        style={styles.paginationButton}
                        onPress={previousPage}
                    >
                        <Image
                            source={icons.chevronLeft}
                            style={styles.paginationImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={styles.paginationTextBox}>
                        <Text style={styles.paginationText}>{page}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.paginationButton}
                        onPress={nextPage}
                    >
                        <Image
                            source={icons.chevronRight}
                            style={styles.paginationImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                )}
			/>
		</SafeAreaView>
	)
}

export default SearchResult
