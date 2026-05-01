"use client"
import { PracticeHeader } from "@/components/practice/PracticeHeader";
import { PracticeMain } from "@/components/practice/PracticeMain";
import { PracticeSidebar } from "@/components/practice/PracticeSidebar";
import { PracticeMobSidebar } from "@/components/practice/PracticeMobSidebar";
import Grid from '@mui/material/Grid2';
import '../exam/exam.css';
import { useEffect, useState } from "react";
import { usePracticeQuestions } from '../../services/PracticeQueris.js';
import { fetchPracticeQuestions } from "@/services/PracticeServices";
import { useInfiniteQuery } from '@tanstack/react-query';
import {PracticeSection} from "@/components/demoPractice/PracticeSection";
export default function Home() {
  const [questions, setQuestions] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const [totalQuestions, setTotalQuestions] = useState(200); // Example total
 
  return (
    <div style={{ ...styles.mainheight }}>
      <PracticeHeader />
      <Grid container spacing={2} className="main_padding" sx={{display:'flex',justifyContent:'center'}}>
      {/* <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} className="hide_above_mob">
          <PracticeMobSidebar
           totalQuestions={totalQuestions}
           currentQuestion={currentQuestion}
          />
        </Grid> */}
        {/* <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} className="hide_above_mob">
          <PracticeMobSidebar
           totalQuestions={totalQuestions}
           currentQuestion={currentQuestion}
          />
        </Grid> */}
        <Grid item size={{ xs: 12, md: 8, lg: 8, sm: 12 }}>
        <PracticeSection />
        </Grid>
        {/* <Grid item size={{ xs: 0, md: 4, lg: 4, sm: 0 }} className="hide">
          <PracticeSidebar
            totalQuestions={totalQuestions}
            currentQuestion={currentQuestion}
          // handleQuestionClick={handleQuestionClick}
          // handleScroll={handleScroll}
          // questions={data}

          />
        </Grid> */}

      </Grid>
    </div>
  );
}

const styles = {
  mainheight: {
    height: "100%",
    backgroundColor: '#2c70ae'
  },
};
