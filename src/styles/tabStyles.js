import { Tab, Tabs } from "@mui/material";
import { createTheme, styled } from '@mui/material/styles';

export const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth:' 80%',
      width: '80%',
     
   
      backgroundColor: '#2833c3',
    },
   
  });
  export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme ,isSelected}) => ({
      textTransform: 'none',
      fontWeight: 500,
      fontFamily:'Poppins , sans-serif !important',
      fontSize: '20px',
      marginRight: theme.spacing(1),
      marginBottom: -14,
      color: '#666666',
      '&.Mui-selected': {
        fontWeight: 600,
        fontFamily:'Poppins , sans-serif !important',
        fontSize: '20px',
        marginRight: theme.spacing(1),
        color: '#000000',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
      '& .MuiTab-wrapper > *:first-child': {
        marginRight: theme.spacing(1),
        color: isSelected ? 'red' : 'inherit', // Change the color when the tab is selected
      },
    }),
  )
  