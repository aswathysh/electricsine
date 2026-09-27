"use client";
// import { PracticeHeader } from '@/components/practice/PracticeHeader';
import QuizPageNew from "@/components/samplequestions/SampleQuestionHomeNew";
import { Header } from "@/components/sharables/Header";
export default function Home({ params }) {
  return (
    <div className="ims-src-app-user-sample-questions-id-page-js-0001" >
      <Header />
      <QuizPageNew params={params} />
    </div>
  );
}
const styles = {
  mainheight: {
    height: "100%",
    backgroundColor: "#2c70ae",
  },
};
