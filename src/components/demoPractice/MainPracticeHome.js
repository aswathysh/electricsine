 "use client"
import Grid from '@mui/material/Grid2';
import { DemoPracticeMobSidebar } from './DemoPracticeMobSidebar';
import { PracticeSection } from './PracticeSection';
import { DemoPracticeSidebar } from './DemoPracticeSidebar';
import { useEffect, useState } from 'react';
import { usePracticeQuestions } from '@/services/PracticeQueris';
import { useMutation } from '@tanstack/react-query';
import { postPracticeAnswers } from '@/services/PracticeServices';
import { Button } from '@mui/material';

export const MainPracticeHome =({params})=>{
    const [subId, setSubId] = useState(params.id); // To store the subject ID
  const [pageParam, setPageParam] = useState(1); // To store the page parameter
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current question index
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [rightAnswer, setRightAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [disableNext, setDisableNext] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [answerdQuesCount, setAnswerdQuesCount] = useState(0);
  const[lastIndex,setLastIndex] = useState(0);
  const[lastSidebarIndex,setLastSidebarIndex] = useState(0);

  const { data: subjectListDatas, isLoading, error } = usePracticeQuestions({
    pageParam: currentPage,   // Passing page parameter to the hook
    subjectId: subId,  // Passing subject ID to the hook
  });
  const practiceAnswerMutation = useMutation({
    mutationFn: (answer) => postPracticeAnswers(answer),

    onSuccess: (data) => {
      // console.log("Order updated successfully:", data);
   

    },
    onError: (error) => {
      // console.error("Error creating Order:", error.response.data.error);
    },
  });
  useEffect(() => {
    if (isLoading) {
      // console.log("Loading...");
      return; // Early return if loading
    }

    if (error) {
      // console.log("Error:", error);
      return; // Early return if there was an error
    }

    if (subjectListDatas && subjectListDatas.data) {
      // console.log("subjectListItems", subjectListDatas);
      let tempQuestion = [...questions, ...subjectListDatas?.data?.questions];
      // console.log("tempQuestion", tempQuestion);
      let lastQuestnNo = subjectListDatas?.data?.last_question_number;
      //setLastIndex(parseInt(subjectListDatas?.data?.last_question_number));
      setQuestions(tempQuestion);
      setCurrentPage(subjectListDatas.pagination?.current_page);
      setTotalQuestions(tempQuestion.length);
      if(lastQuestnNo != null){
       const tempIndex = [];
       tempQuestion.map((item,index)=>{
        if(item.id ==lastQuestnNo ){
          tempIndex.push(index+1);
          // console.log("tempIndex", tempIndex);

        }
       });
       setLastIndex(tempIndex[0])
       setLastSidebarIndex(tempIndex[0])
       setCurrentIndex(tempIndex[0])
}
else{
  setLastIndex(null);
  setCurrentIndex(1)
}
       
      // Handle the fetched data here, for example, setCourseListtems if needed
    }
  }, [subjectListDatas, isLoading, error]);
  useEffect(() => {
    if(lastIndex != null && lastIndex >= currentIndex){
      let tempCurrQues =questions[currentIndex-1]?.answer?.trim().toLowerCase()
    setCurrentQuestion(questions[currentIndex-1])
    setSelectedAnswer(tempCurrQues)
    setRightAnswer(true)
  // console.log("selectedpageAnswer",tempCurrQues)
}
else{
  setCurrentQuestion(questions[currentIndex-1])
setSelectedAnswer('')
}
  }, [currentIndex, questions]);
  useEffect(() => {
    if (answerdQuesCount == 5 && currentIndex >lastIndex) {
      let data = {
        user_id: 5,
        subject_id: questions[0].subject_id,
        question_id: questions[currentIndex-1].id

      }
      practiceAnswerMutation.mutate(data);
      setAnswerdQuesCount(0);

    }
  }, [answerdQuesCount])
  const fetchMoreQuestions = () => {
    // console.log("currentPage",currentPage)
    setCurrentPage(currentPage + 1);

  }
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
  const handleSideBarClick = (index) => {

  //   if(index<=lastIndex){
  //   setCurrentIndex(index);
  //   // setSelectedAnswer('');

  // }
      setCurrentIndex(index);


  }
  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setSelectedAnswer('');
      setDisableNext(true);
      setCurrentIndex(currentIndex + 1); // Move to the next question
      if(currentIndex > lastIndex)
      {
        // console.log("currentIndexcurrentIndex",currentIndex)

        setAnswerdQuesCount(answerdQuesCount + 1);
        setLastSidebarIndex(currentIndex)

      }
      
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous question
    }
  };

  const handleSubmit = () => {
    // Calculate score
    const score = answers.reduce((score, answer, idx) => {
      if (answer === questions[idx].correctAnswer) {
        score += 1; // Increase score if the answer is correct
      }
      return score;
    }, 0);

    // alert(`Your score: ${score} / ${questions.length}`);
  };
    return(
        <Grid container spacing={1}
        className="main_padding_practice"
        sx={{ display: 'flex', justifyContent: 'center' }}>
 
         
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
        <Grid item size={{ xs: 12, md: 0, lg: 0, sm: 12 }} className="hide_above_mob">

          <DemoPracticeMobSidebar
            handleSideBarClick={handleSideBarClick}
            totalQuestions={totalQuestions}
            currentQuestion={currentIndex + 1}
            fetchMoreQuestions={fetchMoreQuestions} />
        </Grid>
        <Grid item size={{ xs: 12, md: 9, lg: 10, sm: 12 }} sx={{}}>
          <PracticeSection
            currentQuestion={currentQuestion}
            currentIndex={currentIndex}
            handleAnswerChange={handleAnswerChange}
            rightAnswer={rightAnswer}
            handlePrevQuestion={handlePrevQuestion}
            handleNextQuestion={handleNextQuestion}
            selectedAnswer={selectedAnswer}
            disableNext={disableNext}
            lastIndex={lastIndex}
          />
        </Grid>
        <Grid item size={{ xs: 0, md: 3, lg: 2, sm: 0 }} className="hide">
          <DemoPracticeSidebar
            handleSideBarClick={handleSideBarClick}
            totalQuestions={totalQuestions}
            currentQuestion={currentIndex }
            fetchMoreQuestions={fetchMoreQuestions}
            lastIndex={lastSidebarIndex}
            currentIndex={currentIndex}
          sample={true}

          // handleQuestionClick={handleQuestionClick}
          // handleScroll={handleScroll}
          // questions={data}

          />
        </Grid>

      </Grid>
    )
}