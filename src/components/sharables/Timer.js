// components/ExamTimer.js
import { useEffect, useState } from 'react';

const Timer = ({ maxTimeInMinutes, onMaxTimeReached ,timer,handleTimer}) => {
  const [timeElapsed, setTimeElapsed] = useState(0); // Starts at 0 seconds

  useEffect(() => {
    // Set an interval that increments the timeElapsed every second
    const timerInterval = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1); // Increment by 1 second
      handleTimer((prevTime) => prevTime + 1);
    }, 1000);

    // Check if max time has been reached
    if (timeElapsed >= maxTimeInMinutes * 60) {
      clearInterval(timerInterval); // Stop the timer when max time is reached
      onMaxTimeReached(); // Call the callback when the max time is reached
    }

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, [timeElapsed, maxTimeInMinutes, onMaxTimeReached,timer]); // Dependency array to rerun when timeElapsed changes

  // Format time as HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
  };

  return (
    <div>
      <h3>Time Elapsed: {formatTime(timer)}</h3>
    </div>
  );
};

export default Timer;
