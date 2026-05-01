import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import Grid from '@mui/material/Grid2';

import React, { useEffect, useState } from "react";
export const Options = ({currentQuestion,handleAnswerChange,selectedAnswer}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    console.log("selectedOption",selectedOption)

  };

  // Handle click on Grid to select the option
  const handleGridClick = (value) => {
    console.log("selectedOption",selectedOption)

    setSelectedOption(value); // Programmatically select the radio button
    handleAnswerChange(value)
  };
  useEffect(()=>{
    console.log("currentQuestion",currentQuestion)

    console.log("selectedAnswer",selectedAnswer)
    if(selectedAnswer == '' && currentQuestion.attended_answer == null){
    setSelectedOption('')}
    else if(currentQuestion.attended_answer != null){
      setSelectedOption(currentQuestion.attended_answer)
    }
    else if(selectedAnswer != ''){
      setSelectedOption(selectedAnswer);
    }
  
  },[selectedAnswer])
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      value={selectedAnswer}
      onChange={(e)=>handleAnswerChange(e.target.value)}

    >        
    <Grid container style={{ ...styles.spacearound }} sx={{mt:3}}>

        <Grid item
          size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
          style={{ ...styles.optionItem }}
          onClick={() => handleGridClick('a')}>
          <FormControlLabel value="a"
            control={<Radio
              sx={{
                color: blue[800],
                '&.Mui-checked': {
                  color: blue[600],
                },
              }}
              checked={selectedOption === 'a'}
              onChange={handleOptionChange}
            />} label={currentQuestion?.option1} />


        </Grid>
        <Grid item
          size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
          style={{ ...styles.optionItem }}
          onClick={() => handleGridClick('b')}>
          <FormControlLabel value="b"
            control={<Radio
              sx={{
                color: blue[800],
                '&.Mui-checked': {
                  color: blue[400],
                },
              }}
              checked={selectedOption === 'b'}
              onChange={handleOptionChange}
            />} label={currentQuestion?.option2} />

        </Grid>
        <Grid item
          size={{ xs: 12, md: 12, lg: 12, sm: 12 }}

          style={{ ...styles.optionItem }}
          onClick={() => handleGridClick('c')}>
          <FormControlLabel value="c"
            control={<Radio
              sx={{
                color: blue[800],
                '&.Mui-checked': {
                  color: blue[400],
                },
              }}
              checked={selectedOption === 'c'}
              onChange={handleOptionChange}
            />} label={currentQuestion?.option3} />

        </Grid>
        <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
          style={{ ...styles.optionItem }}
          onClick={() => handleGridClick('d')}>
          <FormControlLabel value="d"
            control={<Radio
              sx={{
                color: blue[800],
                '&.Mui-checked': {
                  color: blue[400],
                },
              }}
              checked={selectedOption === 'd'}
              onChange={handleOptionChange}
            />} label={currentQuestion?.option4}/>

        </Grid>
      </Grid>

    </RadioGroup>
  )
}
const styles = {
  optionItem: {
    backgroundColor: '#dedede',
    padding: '5px 15px 5px 15px',
    margin: '5px'
  },
  spacearound: {
    display: 'flex',
    justifyContent: 'space-around'
  }

}