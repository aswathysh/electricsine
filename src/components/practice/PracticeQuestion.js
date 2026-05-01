import { Hexagon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
export const PracticeQuestion = () => {
    return (
        <div style={{ ...styles.main }}>
        <div style={{ ...styles.hexagon }}>
        <Typography className="subhead light_text " sx={{ mt: 1 }}>
                What is the main objective of a CT Polarity Test?
            </Typography>
            </div>
        </div>
    )
}
const styles = {
    main: {
        // boxShadow: '2px 2px 2px 4px blue', // Creates the illusion of a border
        // clipPath: 'polygon(5% 0%, 96% 0%, 100% 47%, 96% 100%, 5% 100%, 0% 50%)',
        // padding: '20px',
        // backgroundColor:'blue'
        position: 'relative',
        width: '100%',
        height: '70vmin',
        background: 'blue',
    clipPath:'polygon(5% 0%, 96% 0%, 100% 47%, 96% 100%, 5% 100%, 0% 50%)'
       },
    hexagon:{
        position: 'absolute',
        top: '3px',
        left: '4px',
        right:' 4px',
        bottom: '3px',
        background: 'white',
        clipPath:'polygon(5% 0%, 96% 0%, 100% 47%, 96% 100%, 5% 100%, 0% 50%)',
        padding:'5px',
        textAlign:'center'
        
    }
}