import React, { useState } from "react";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import { Grid, Typography,Box } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { SubjectTabs } from "./SubjectTabs";
import { SingleSubject } from "./SingleSubject";
export const SubjectList=()=>{
    const [tabValue, setTabValue] = useState('one');
    const [anchorEl, setAnchorEl] = useState(null);
    const handleTabChange = (e, newValue) => {
        setTabValue(newValue);
        // setAnchorEl(null);
        sessionStorage.setItem("subjectTab", newValue);
      };
    return(
        <TabContext value={tabValue}>
        <SubjectTabs
          anchorEl={anchorEl}
        //   handleMenuOpen={handleMenuOpen}
        //   handleMenuClose={handleMenuClose}
        //   isDarkMode={isDarkMode}
           handleTabChange={handleTabChange}
          tabValue={tabValue}
        //   deviceTabListValue={deviceTabListValue}

        />
        <TabPanel value="one" index="one" sx={{ width: "100% !important" }}>
          <SingleSubject />
          
        </TabPanel>
        <TabPanel value="two" index="two" sx={{ width: "100% !important" }}>
        <SingleSubject />
        </TabPanel>
        </TabContext>
    )
}