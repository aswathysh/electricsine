'use client';
import { Button } from "@mui/material";
import { createTheme, styled } from '@mui/material/styles';
export const BorderButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  // paddingTop: '3% !important',
  // paddingBottom: '3% !important',
  // padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
   backgroundColor: '#ffffff !importaant',
  borderColor: '#666666',
  color:'#000000',
  borderRadius:'5px',
   fontWeight: 600,
  fontFamily: [
    'Nunito, sans-serif !important',

  ].join(','),
  '&:hover': {
    // backgroundColor: '#000000',
    borderColor: '#000000',
    backgroundColor: 'white !importaant',

    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'white !importaant',

    // backgroundColor: '#FFAC0B',
    borderColor: '#000000',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
 const StyledGreyButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    paddingTop: '2px !important',
    paddingBottom: '2px !important',
    // padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#3BA3FC',
    borderColor: '#3BA3FC',
    // fontWeight: 600,
    fontFamily: [
      'Poppins , sans-serif !important',
  
    ].join(','),
    '&:hover': {
      backgroundColor: '#3BA3FC',
      borderColor: '#3BA3FC',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#3BA3FC',
      borderColor: '#7D8BAA',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  export default StyledGreyButton;