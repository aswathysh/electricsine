"use client"
import Grid from '@mui/material/Grid2';
import { DemoPracticeMobSidebar } from '../demoPractice/DemoPracticeMobSidebar';
import { PracticeSection } from '../demoPractice/PracticeSection';
import { DemoPracticeSidebar } from '../demoPractice/DemoPracticeSidebar';
import { useEffect, useState } from 'react';
import { useSampleQuestionSections } from '@/services/PracticeQueris';
import { Alert, Snackbar } from '@mui/material';

export const SampleQuestionHome = ({ params }) => {
  // const [subId, setSubId] = useState(params.id);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current question index
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [rightAnswer, setRightAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [disableNext, setDisableNext] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const { data: samplequestions, isLoading, error } = useSampleQuestionSections({ subjectId: params.id });
  // console.log("samplequestions", samplequestions?.questions);
  useEffect(() => {
    if (isLoading) {
      // console.log("Loading...");
      return; // Early return if loading
    }

    if (error) {
      // console.log("Error:", error);
      return; // Early return if there was an error
    }

    if (samplequestions && samplequestions?.questions) {
      // console.log("subjectListItems", subjectListDatas);
      let tempQuestion = [...questions, ...samplequestions?.questions];
      setQuestions(tempQuestion);
      setCurrentPage(samplequestions.pagination?.current_page);
      setTotalQuestions(tempQuestion.length);
      setCurrentIndex(1)

    }
  }, [samplequestions, isLoading, error]);

  useEffect(() => {
    // console.log("questions[currentIndex-1]", questions[currentIndex - 1])
    setCurrentQuestion(questions[currentIndex - 1])
    setSelectedAnswer('')

  }, [currentIndex, questions]);
  const handleAnswerChange = (value) => {
    setSelectedAnswer(value);
    const correctAnswer = currentQuestion.answer.trim().toLowerCase();
    setSelectedAnswer(value);

    if (correctAnswer == value) {
      setSelectedAnswer(value);
      setRightAnswer(true);
      setDisableNext(false);
    }
    else {
      setRightAnswer(false);
      setDisableNext(true)
    }
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = event.target.value; // Update the answer for the current question
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setSelectedAnswer('');
      setDisableNext(true);
      setCurrentIndex(currentIndex + 1); // Move to the next question
      // if(currentIndex > lastIndex)
      // {
      //   // console.log("currentIndexcurrentIndex",currentIndex)

      //   setAnswerdQuesCount(answerdQuesCount + 1);
      //   setLastSidebarIndex(currentIndex)

      // }

    }
    else {
      setShowAlert(true);
      setTimeout(() => {
          setShowAlert(false);
          window.history.back();
          // setIsSuccess(false);
      }, 3000);    }
  };
  const handleSideBarClick = (index) => {
    // if(index<=lastIndex){
    setCurrentIndex(index);
    // setSelectedAnswer('');

  }
  const fetchMoreQuestions = () => {
  }
  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous question
    }
  }
  const handlealertClose = () => {
    setShowAlert(false);
    window.history.back();

}
  
  return (
    <Grid container spacing={1}
      className="main_padding_practice"
      sx={{ display: 'flex', justifyContent: 'center' }}>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handlealertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handlealertClose}
          severity={ "warning"}
          variant="outlined"
          sx={{ width: 'auto', backgroundColor: '#FCDFDF' }}

        >
          {"You’ve reached the end of the trial questions.To continue and access the full set of questions, please upgrade your plan or purchase the full version."}
        </Alert>
      </Snackbar>
      
      <Grid item size={{ xs: 12, md: 0, lg: 0, sm: 12 }} className="hide_above_mob">
        <DemoPracticeMobSidebar
        //  handleSideBarClick={handleSideBarClick}
        //  totalQuestions={totalQuestions}
        //  currentQuestion={currentIndex + 1}
        //  fetchMoreQuestions={fetchMoreQuestions}
        />
      </Grid>
      <Grid item size={{ xs: 12, md: 9, lg: 10, sm: 12 }} sx={{}}>
        <PracticeSection
          currentQuestion={currentQuestion}
          currentIndex={currentIndex}
          handleAnswerChange={handleAnswerChange}
          selectedAnswer={selectedAnswer}
          handlePrevQuestion={handlePrevQuestion}
          handleNextQuestion={handleNextQuestion}
          sample={true}

        />
      </Grid>
      <Grid item size={{ xs: 0, md: 3, lg: 2, sm: 0 }} className="hide">
        <DemoPracticeSidebar
          handleSideBarClick={handleSideBarClick}
          totalQuestions={totalQuestions}
          currentQuestion={currentIndex}
          fetchMoreQuestions={fetchMoreQuestions}
          lastIndex={0}
          currentIndex={currentIndex}
          sample={true}
        />
      </Grid>
    </Grid>
  )
}