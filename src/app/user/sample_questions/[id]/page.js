"use client"
import { PracticeHeader } from '@/components/practice/PracticeHeader';
import { SampleQuestionHome } from '@/components/samplequestions/SampleQuestionHome'
import { IconButton } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
export default function Home({ params }) {
  const handleBack = () => {
    window.location.href = '/user/home'
  }
  return (
    <div style={{ ...styles.mainheight }}>
      <PracticeHeader />
      <IconButton sx={{ color: 'white', fontSize: '15px' }} onClick={handleBack}>
        <KeyboardBackspaceIcon sx={{ color: "white" }} />
        <span>{' '}</span>
        {' '}{"  Exit"}
      </IconButton>
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