// components/ExamTimer.js
import { useEffect, useState } from 'react';

const ExamTimer = ({ 
    maxTimeInMinutes, onMaxTimeReached
    // durationInMinutes, onTimeUp

 }) => {
//   const [timeLeft, setTimeLeft] = useState(durationInMinutes * 60); // Convert minutes to seconds
const [timeElapsed, setTimeElapsed] = useState(0); // Starts at 0 seconds

//   useEffect(() => {
//     if (timeLeft === 0) {
//       onTimeUp(); // Trigger exam submission or a similar action
//       return; // Stop the timer when time is up
//     }

//     const timerInterval = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime + 1);
//     }, 1000); // Update every second

//     return () => clearInterval(timerInterval); // Cleanup the interval on component unmount
//   }, [timeLeft, onTimeUp]);

useEffect(() => {
    
    console.log("Time Elapsed:", timeElapsed);

    const timerInterval = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000); // Increment every second

    // Stop the timer once the max time is reached
    if (timeElapsed >= maxTimeInMinutes * 60) {
      clearInterval(timerInterval);
      onMaxTimeReached(); // Call callback when max time is reached
    }

    return () => clearInterval(timerInterval); // Cleanup interval when component unmounts
  }, [timeElapsed, maxTimeInMinutes, onMaxTimeReached]);

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secondsLeft = seconds % 60;
//     return `${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
//   };
  // Format the time as HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    alert(hours)
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
  };
  return (
    <div>
      <h3>Time Remaining: {formatTime(timeElapsed)}</h3>
    </div>
  );
};

export default ExamTimer;
