import { PracticeHeader } from "@/components/practice/PracticeHeader";
import { SampleQuestionHome } from "@/components/samplequestions/SampleQuestionHome";

export default function Home({ params }) {
  return (
    <div style={{ ...styles.mainheight }}>
      <PracticeHeader />
      <SampleQuestionHome params={params} />
    </div>
  )
}
const styles = {
  mainheight: {
    height: "100%",
    backgroundColor: '#2c70ae'
  },
};