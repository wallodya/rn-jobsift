export type JobData = {
	employer_company_type: string | null
	employer_logo: string | null
	employer_name: string
	employer_website: string | null
	job_apply_is_direct: boolean
	job_apply_link: string
	job_apply_quality_score: 0.7363
	job_benefits: string[]
	job_city: string
	job_country: string
	job_description: string
	job_employment_type: string
	job_experience_in_place_of_education: boolean
    job_google_link: string
	job_highlights: Partial<{
		Qualifications: string[]
		Benefits: string[]
        Responsibilities: string[]
	}>
	job_id: string
	job_is_remote: boolean
	job_job_title: string | null
	job_latitude: number
	job_longitude: number
	job_max_salary: number | null
	job_min_salary: number | null
	job_occupational_categories: string[]
	job_offer_expiration_datetime_utc: string
	job_offer_expiration_timestamp: number
	job_onet_job_zone: string
	job_onet_soc: string
	job_posted_at_datetime_utc: string
	job_posted_at_timestamp: number
	job_posting_language: string
	job_publisher: string
	job_required_education: {
		postgraduate_degree: boolean
		professional_certification: boolean
		high_school: boolean
		associates_degree: boolean
		bachelors_degree: boolean
	}
	job_required_experience: {
		no_experience_required: boolean
		required_experience_in_months: number
		experience_mentioned: boolean
		experience_preferred: boolean
	}
	job_required_skills: string[] | null
	job_salary_currency: string | null
	job_salary_period: string | null
	job_state: string
	job_title: string
}

export type JobSearchParams = Partial<{
	query: string
	page: number
	num_pages: number
    job_id: string
}>

export type JobSearchAPIResponse = {
	status: string
	request_id: string
	parameters: JobSearchParams
	data: JobData[]
}

const isJobData = (obj: unknown): obj is JobData => {
	return typeof obj === "object" && obj !== null
}

const isRequestParams = (obj: unknown): obj is JobSearchParams => {
	return typeof obj === "object" && obj !== null
}

export const isJobSearchAPIResponse = (
	obj: unknown
): obj is JobSearchAPIResponse => {
	return (
		typeof obj === "object" &&
		obj !== null &&
		"status" in obj &&
		typeof obj.status === "string" &&
		"request_id" in obj &&
		typeof obj.request_id === "string" &&
		"parameters" in obj &&
		isRequestParams(obj.parameters) &&
		"data" in obj &&
		Array.isArray(obj.data) &&
		obj.data.every(j => isJobData(j))
	)
}
