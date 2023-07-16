import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
import { JobData } from "../../../../types/api.types";


export const getJobCardStyles = (selectedJobId: string, item: JobData) => {
    return StyleSheet.create({
        container: {
            width: 250,
            padding: SIZES.xLarge,
            backgroundColor: selectedJobId === item.job_id ? COLORS.primary : "#FFF",
            borderRadius: SIZES.medium,
            justifyContent: "space-between",
            ...SHADOWS.medium,
            shadowColor: COLORS.white,
        },
        logoContainer: {
            width: 50,
            height: 50,
            backgroundColor: selectedJobId === item.job_id ? "#FFF" : COLORS.white,
            borderRadius: SIZES.medium,
            justifyContent: "center",
            alignItems: "center",
        },
        logoImage: {
            width: "70%",
            height: "70%",
        },
        companyName: {
            fontSize: SIZES.medium,
            fontFamily: FONT.regular,
            color: "#B3AEC6",
            marginTop: SIZES.small / 1.5,
        },
        infoContainer: {
            marginTop: SIZES.large,
        },
        jobName: {
            fontSize: SIZES.large,
            fontFamily: FONT.medium,
            color: selectedJobId === item.job_id ? COLORS.white : COLORS.primary,
        },
        infoWrapper: {
            flexDirection: "row",
            marginTop: 5,
            justifyContent: "flex-start",
            alignItems: "center",
        },
        publisher:{
            fontSize: SIZES.medium - 2,
            fontFamily: FONT.bold,
            color: selectedJobId === item.job_id ? COLORS.white : COLORS.primary,
        },
        location: {
            fontSize: SIZES.medium - 2,
            fontFamily: FONT.regular,
            color: "#B3AEC6",
        },
    });
}

export default getJobCardStyles;
