import { PracticeHeader } from "@/components/practice/PracticeHeader";
// import { useExamQuestions } from "@/services/PracticeQueris";
// import { PracticeSidebar } from '@/components/practice/PracticeSidebar';
// import { PracticeMain } from '@/components/practice/PracticeMain';
// import { PracticeMobSidebar } from '@/components/practice/PracticeMobSidebar';
// import { useEffect, useState } from "react";
import '@/app/exam/exam.css';
import '@/styles/examStyles.css';
import '@/styles/globalStyles.css';
import Grid from '@mui/material/Grid2';
// import { getUserScore, postExamAnswers } from "@/services/PracticeServices";
// import { useMutation } from "@tanstack/react-query";
// import { ExamScoreModal } from '@/components/exam/ExamScoreModal'
import { AttendExamMain } from "@/components/exam/AttendExamMain";
import { fetchExamSectionsParam, fetchExamSectionsParams } from "@/services/PracticeServices";


// export async function generateStaticParams() {
//   let exams = Array.from({ length: 500 }, (_, index) => {
//     let i = Math.floor(index / 100) + 1; // Determines the group (1, 2, or 3)
//     let j = (index % 30) + 1;           // Determines the exam number (1 to 100)
//     return `EXAM_${i}_${j}`;
//   }
// )
//   return exams.map(id => ({
//     id: id.toString(), // Ensure IDs are strings
//   }));
// }
// export const dynamic = 'force-static'

export default function Home({ params }) {
 
  return (
    <div style={{ ...styles.mainheight }}>
      <PracticeHeader />
      {/* <Grid container spacing={2} className="main_padding">
        <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} className="hide_above_mob">
          <PracticeMobSidebar
            totalQuestions={totalQuestions}
            currentQuestion={currentIndex}
            handleSideBarClick={handleSideBarClick}
            // handleQuestionClick={handleQuestionClick}
            // handleScroll={handleScroll}
            currentIndex={currentIndex}
          />
        </Grid>
        <ExamScoreModal
          showScoreModal={showScoreModal}
          closeScoreCard={closeScoreCard}
          scoreData={scoreData}
        />
        <Grid item size={{ xs: 12, md: 8, lg: 8, sm: 12 }}>
          <PracticeMain
            currentQuestion={currentQuestion}
            currentIndex={currentIndex}
            handleTimer={handleTimer}
            timer={timer}
            //   durationInMinutes={55.50}
            maxTimeInMinutes={30}
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={selectedAnswer}
            handleSave={handleSave}
            handleSkip={handleSkip}
            handleFinished={handleFinished}
          />

        </Grid>
        <Grid item size={{ xs: 0, md: 4, lg: 4, sm: 0 }} className="hide">
          {JSON.stringify(answeredQuestions)}
          <PracticeSidebar
            totalQuestions={totalQuestions}
            currentQuestion={currentIndex}
            handleSideBarClick={handleSideBarClick}
            // handleQuestionClick={handleQuestionClick}
            // handleScroll={handleScroll}
            currentIndex={currentIndex}
            skippedQuestions={skippedQuestions}
            answeredQuestions={answeredQuestions}
            totalSkipped={totalSkipped}
            totalAnswered={totalAnswered}
          />
        </Grid>
      </Grid> */}
      <AttendExamMain  params={params} />
    </div>
  )
}
const styles = {
  mainheight: {
    height: "100%",
    backgroundColor: 'white'
  },

  head: {
    fontSize: '1.5rem'
  }
  ,
  fullWidth: {
    width: "100% !important"

  },


};