"use client"
import { PracticeHeader } from "@/components/practice/PracticeHeader";
import { PracticeMain } from "@/components/practice/PracticeMain";
import { PracticeSidebar } from "@/components/practice/PracticeSidebar";
import { PracticeMobSidebar } from "@/components/practice/PracticeMobSidebar";

import Grid from '@mui/material/Grid2';
import '../../styles/globalStyles.css';
import '../../styles/examStyles.css';
import './exam.css';
import { useEffect, useState } from "react";
import { usePracticeQuestions } from '../../services/PracticeQueris.js';
import { fetchPracticeQuestions } from "@/services/PracticeServices";
import { useInfiniteQuery } from '@tanstack/react-query';
export default function Home() {
  const [questions, setQuestions] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const [totalQuestions, setTotalQuestions] = useState(200); // Example total
  // useEffect(()=>{
  //       const {
  //         data,
  //         error,
  //         fetchNextPage,
  //         hasNextPage,
  //         isFetchingNextPage,
  //         status,
  //       } = useInfiniteQuery({
  //         queryKey: ['questions'],
  //         queryFn: ({ pageParam = 1 }) => fetchPracticeQuestions({ pageParam }),
  //         getNextPageParam: (lastPage) => {
  //           const nextPage = lastPage.next_page_url
  //             ? new URL(lastPage.next_page_url).searchParams.get('page')
  //             : null;
  //           return nextPage ? parseInt(nextPage) : undefined;
  //         },
  //       });
  //     console.log("datadata",data);
  //     useEffect(()=>{
  //       if(data != undefined){
  //         console.log("undefinedundefined",data.pages?.map(i=>(i.data).length));
  //         console.log("undefinedundefined",data?.pages?.data?.length)


  // let number = data.pages?.map(i=>(i.data).length);
  // setTotalQuestions(number)
  // //console.log("numbernumber",number);

  //       }
  //     },[data])
  //       const handleScroll = (e) => {
  //         const bottom =
  //           e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  //         if (bottom && hasNextPage) {
  //           fetchNextPage();
  //         }
  //       };
  //       const handleQuestionClick = (questionNumber) => {
  //         setCurrentQuestion(questionNumber);
  //       };

  return (
    <div style={{ ...styles.mainheight }}>
      <PracticeHeader />
      <Grid container spacing={2} className="main_padding">
        <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} className="hide_above_mob">
          <PracticeMobSidebar
           totalQuestions={totalQuestions}
           currentQuestion={currentQuestion}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 8, lg: 8, sm: 12 }}>
          <PracticeMain />
        </Grid>
        <Grid item size={{ xs: 0, md: 4, lg: 4, sm: 0 }} className="hide">
          <PracticeSidebar
            // totalQuestions={totalQuestions}
            // currentQuestion={currentQuestion}
          // handleQuestionClick={handleQuestionClick}
          // handleScroll={handleScroll}
          // questions={data}

          />
        </Grid>

      </Grid>
    </div>
  );
}

const styles = {
  mainheight: {
    height: "100%",
    backgroundColor: 'white'
  },
};
