"use client";
// import { PracticeHeader } from '@/components/practice/PracticeHeader';
import QuizPageNew from "@/components/samplequestions/SampleQuestionHomeNew";
import { Header } from "@/components/sharables/Header";
export default function Home({ params }) {
  return (
    <div style={{ ...styles.mainheight }}>
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
