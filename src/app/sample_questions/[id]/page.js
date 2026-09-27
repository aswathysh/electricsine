"use client";
// import { PracticeHeader } from "@/components/practice/PracticeHeader";
// import { SampleQuestionHome } from "@/components/samplequestions/SampleQuestionHome";
import QuizPageNew from '@/components/samplequestions/SampleQuestionHomeNew';
import { Header } from '@/components/sharables/Header';

export default function Home({ params }) {
  return (
    <div className="ims-src-app-sample-questions-id-page-js-0001" >
      <Header/>
      {/* <SampleQuestionHome params={params} /> */}
      <QuizPageNew params={params}/>
    </div>
  )
}
const styles = {
  mainheight: {
    height: "100%",
    backgroundColor: '#2c70ae'
  },
};