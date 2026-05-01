"use client"
import { useEffect, useState } from "react";
import { PracticeMain } from "../practice/PracticeMain"
import { PracticeMobSidebar } from "../practice/PracticeMobSidebar"
import { PracticeSidebar } from "../practice/PracticeSidebar"
import { ExamScoreModal } from "./ExamScoreModal"
import Grid from '@mui/material/Grid2';
import { useExamQuestions } from "@/services/PracticeQueris";
import { getUserScore, postExamAnswers } from "@/services/PracticeServices";
import '@/app/exam/exam.css';
import '@/styles/examStyles.css';
import '@/styles/globalStyles.css';
import { useMutation } from "@tanstack/react-query";
export const AttendExamMain =({params})=>{
    const [examId, setExamId] = useState(params.id);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerdQuesCount, setAnswerdQuesCount] = useState(0);
    const [skippedQuestions, setSkippedQuestions] = useState(new Set());
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
    const [totalSkipped, setTotalSkipped] = useState(0);
    const [totalAnswered, setTotalAnswered] = useState(0);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [scoreData, setScoreData] = useState({});
    const [timer, setTimer] = useState(0)
  
    //     const [savedAnswer,setSavedAnswer] = useState({
    //         question_id:'',
    //         answer:''
    // });
    const [savedAnswerList, setSavedAnswerList] = useState([])
    const { data: questionDatas, isLoading, error } = useExamQuestions({
      //pageParam: currentPage,   // Passing page parameter to the hook
      examId: examId,  // Passing subject ID to the hook
    });
    const examAnswerMutation = useMutation({
      mutationFn: (answer) => postExamAnswers(answer),
  
      onSuccess: (data) => {
        console.log("answer saved successfully", data);
        //   console.log("User created successfully:", data.data.token);
  
        //  sessionStorage.setItem("user_order_id_elec", data.order_id);
        //   window.location.href = '/practice'
        // Optionally redirect or show a success message
        alert("success")
        // window.location.href = '/auth/login'
  
      },
      onError: (error) => {
        console.error("Error in saving answer:", error.response.data.error);
      },
    });
    const userScoreMutation = useMutation({
      mutationFn: (answer) => getUserScore(answer),
  
      onSuccess: (data) => {
        console.log("Score getted successfully:", data);
        // window.location.href = '/auth/login';
        setScoreData(data);
        setShowScoreModal(!showScoreModal);
  
      },
      onError: (error) => {
        console.error("Error getting score:", error.response.data.error);
      },
    });
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
      if (questionDatas && questionDatas.questions) {
        console.log("questionDatas", questionDatas.questions);
        let tempQuestions = questionDatas.questions;
        const skipped = new Set(skippedQuestions);
        const answered = new Set(answeredQuestions);
        tempQuestions.map((item, index) => {
          if (item.attended_answer != null && item.attended_answer != "z") {
            answered.add(index + 1)
          }
          if (item.attended_answer != null && item.attended_answer == "z") {
            skipped.add(index + 1)
          }
        })
        // console.log("tempAttend",tempAttend)
        setAnsweredQuestions(answered)
        setTotalAnswered(answered.size)
        setSkippedQuestions(skipped)
        setTotalSkipped(skipped.size)
        setQuestions(tempQuestions);
        setTotalQuestions(tempQuestions.length);
  
      }
    }, [questionDatas, isLoading, error]);
    useEffect(() => {
      console.log("currentIndex", currentIndex)
      setCurrentQuestion(questions[currentIndex - 1])
      if (questions[currentIndex - 1]?.attended_answer != null) {
        setSelectedAnswer(questions[currentIndex - 1]?.attended_answer)
      }
      else {
        setSelectedAnswer('')
      }
  
    }, [currentIndex, questions]);
    useEffect(() => {
      if (answerdQuesCount == 5) {
        // alert("hii");
        let data = {
          user_id: "5",
          subject_id: questions[0].subject_id,
          exam_id: examId,
          answers: savedAnswerList,
          timer: timer
  
        }
        console.log("savedAnswerList", data)
        examAnswerMutation.mutate(data)
        setAnswerdQuesCount(0);
  
        setSavedAnswerList([])
  
      }
    }, [answerdQuesCount]);
    const closeScoreCard = () => {
      setShowScoreModal(false);
      window.location.href = '/user/home'
    }
    const handleSideBarClick = (index) => {
      setCurrentIndex(index);
    }
    const handleTimeUp = () => {
      setIsTimeUp(true);
      alert('Time is up! The exam will be submitted automatically.');
      // Call your exam submission logic here
      // For example, you could submit the form or redirect the user
    };
  
    const handleAnswerChange = (value) => {
      console.log(value)
      setSelectedAnswer(value);
      const answered = new Set(answeredQuestions);
      answered.add(currentIndex);
      console.log("answered", answered)
      setAnsweredQuestions(answered);
      const skipped = new Set(skippedQuestions);
      skipped.delete(currentIndex);
      setSkippedQuestions(skipped);
  
    }
    const handleSave = () => {
      let tempsave = {
        question_id: currentQuestion.id,
        answer: selectedAnswer
      }
      setSavedAnswerList((prevItems) => {
        if (!Array.isArray(prevItems)) {
          return [tempsave]; // If prevItems is not an array, initialize it with tempsave
        }
        return [...prevItems, tempsave];
      })
      console.log("Answer saved:", tempsave);
      const answered = new Set(answeredQuestions);
  
      setAnswerdQuesCount(answerdQuesCount + 1);
      setTotalAnswered(answered.size);
  
      setSelectedAnswer('')
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer('')
  
    };
    const handleSkip = () => {
      const skipped = new Set(skippedQuestions);
      skipped.add(currentIndex);
      setSkippedQuestions(skipped);
      setTotalSkipped(skipped.size);
      let tempsave = {
        question_id: currentQuestion.id,
        answer: 'z'
      }
      setSavedAnswerList((prevItems) => {
        if (!Array.isArray(prevItems)) {
          return [tempsave]; // If prevItems is not an array, initialize it with tempsave
        }
        return [...prevItems, tempsave];
      })
      console.log("Answer saved:", tempsave);
      setAnswerdQuesCount(answerdQuesCount + 1);
      setSelectedAnswer('')
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer('')
      setCurrentIndex(currentIndex + 1)
      console.log("skippedcurrentIndex", currentIndex);
      console.log(skippedQuestions);
  
    };
    const handleFinished = () => {
      let data = {
        exam_id: examId
      }
      userScoreMutation.mutate(data)
    }
    const handleTimer = (time) => {
      setTimer(time)
    }
    return(
        <Grid container spacing={2} className="main_padding">
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
          {/* {JSON.stringify(answeredQuestions)} */}
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
      </Grid>
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