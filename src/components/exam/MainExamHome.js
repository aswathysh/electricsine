"use client"
import { useExamSections } from "@/services/PracticeQueris";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import '../.././styles/globalStyles.css'
import { useRouter } from "next/navigation";
export const MainExamHome = ({ params }) => {
    const router = useRouter();
    // const [subId, setSubId] = useState(params.id); // To store the subject ID
    const [examSectionList, setExamSectionList] = useState([])
    const { data: examSectionListData, isLoading, error } = useExamSections({
        subjectId: params.id,  // Passing subject ID to the hook
    });
    useEffect(() => {

if(params.id != null){
    sessionStorage.setItem("elec_exam_id",params.id)
}
    }, [params.id])
    useEffect(() => {
        if (isLoading) {
            // alert("Loading............")
            console.log("Loading...");
            return; // Early return if loading
        }

        if (error) {
            console.log("Error:", error);
            return; // Early return if there was an error
        }

        if (examSectionListData && examSectionListData.exam_ids) {
            console.log("examSectionListData", examSectionListData);
            setExamSectionList(examSectionListData?.exam_ids)
        }
    }, [examSectionListData, isLoading, error]);
    const handleClick = (id) => {
        window.location.href=`attend/${id}`;
    }
    return (
        <Grid container
            className="main"
            style={{
                ...styles.center,

                ...styles.fullheight, backgroundColor: "rgb(1 41 103)"
            }}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 5 }}
            sx={{ mt: 3 }}>

            {examSectionList.map((item, index) =>
                <Grid item key={index} size={{ xs: 12, md: 3, lg: 3, sm: 12 }}
                    style={{ ...styles.center }}
                    className="exam_background "
                    onClick={() => handleClick(item)}
                >
                    <h1
                        style={{
                            ...styles.subheading,
                            ...styles.aboutheadpadding,
                            // ...styles.pt3,
                            // ...styles.aboutHead,
                        }}
                    >
                        {`Exam${index + 1}`}
                    </h1>
                </Grid>
            )}
        </Grid>
    )
}
const styles = {
    fullwidth: { width: "80%" },
    // fullheight: { minHeight: '100vh !important' },
    contentleft: {
        display: 'flex',
        justifyContent: 'left'
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column',
    },
    subheading: {
        fontSize: "22px", // Adjust font size as needed
        margin: "0", // No margin for subheading
        fontFamily: "DM Serif Display, serif",
        paddingBottom: "2%",
        color: "#000000",
        //textShadow: '1px 1px #000000'

    },
    backGround: {
        // background-image: radial-gradient(skyblue, blue);

    },
    fullheight: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '10%'
    },
    main: {
        paddingLeft: '10%'
    }
};