"use client"
import { React } from "react";

import { PracticeHeader } from "@/components/practice/PracticeHeader";

import '../../../exam/exam.css';

import '../../../../styles/globalStyles.css'
import '../../../../styles/examStyles.css'

import { MainPracticeHome } from '@/components/demoPractice/MainPracticeHome'
import { Button, IconButton } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';// export async function generateStaticParams() {
//   // Replace with actual IDs fetched from your data source or a hardcoded array
//   const ids = Array.from({ length: 100 }, (_, i) => i + 1) // Make sure these IDs match the expected dynamic routes
//   return ids.map((id) => ({
//     id: id.toString() // Ensure IDs are strings
//   }));
// }
export default function Home({ params }) {

  const handleBack = () => {
    window.location.href = '/user/home'
  }

  return (
    <div style={{ ...styles.mainheight }}>
      <PracticeHeader />
      {/* <Grid item container> */}
      <IconButton sx={{ color: 'white', fontSize: '15px' }} onClick={handleBack}>
        <KeyboardBackspaceIcon sx={{ color: "white" }} />
        <span>{' '}</span>
        {' '}{"  Exit"}
      </IconButton>
      {/* </Grid> */}
      <MainPracticeHome params={params} practice={true} />
    </div>
  );
}

const styles = {
  mainheight: {
    height: "100%",
    backgroundColor: '#2c70ae'
  },
};
