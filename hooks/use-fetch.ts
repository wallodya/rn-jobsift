import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"
import { JobData, JobSearchAPIResponse, JobSearchParams, isJobSearchAPIResponse } from "../types/api.types"


const useFetch = (endpoint: string, params?: JobSearchParams) => {
	const [data, setData] = useState<JobData[]>([])
	const [isError, setIsError] = useState(false)
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const FETCH_OPTIONS = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: params ?? {
            num_pages: 1,
            page: 1,
            query: "developer"
        },
		headers: {
			// "X-RapidAPI-Key": process.env.RAPID_API_KEY,
			"X-RapidAPI-Key": "7489aca3cdmsh2e76409e9cd70b4p113254jsn012a198ae196",
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
	}

    const handleRequestError = (err: any) => {
        setIsError(true)
        setError(err)
		console.error(err)
    }

    const handleResponse = (res: AxiosResponse<JobSearchAPIResponse, any>) => {
        if (!isJobSearchAPIResponse(res.data) || res.data.status !== "OK") {
            setIsError(true)
            setError({ messgae: "Invalid API response"})
        }

        setData(res.data.data)
    }

    const fetchData = async () => {
        setIsLoading(true)
        setIsError(false)
        try {
            const response = await axios.request<JobSearchAPIResponse>(FETCH_OPTIONS)
            handleResponse(response)
        } catch (error) {
            handleRequestError(error)
        } finally {
            setIsLoading(false)
        }
    }

    const refetch = async () => {
        await fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])


    return {
        data,
        isLoading,
        isError,
        error,
        refetch
    }
}

export default useFetch
