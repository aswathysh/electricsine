import { StyledTab, StyledTabs } from "@/styles/tabStyles";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
export const SubjectTabs =({tabValue,handleTabChange})=>{
    const isMobile = useMediaQuery("(max-width: 600px)");

    return(
        <Box sx={{ width: "100%" }}>
        <StyledTabs
           value={tabValue}
           onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "standard"}
          // scrollButtons={isMobile ? 'auto' : 'off'}
          //   textColor="secondary"
          //   indicatorColor="#E28909"z
          //   aria-label="secondary tabs example"
        >
          <StyledTab
            value="one"
            label="EEE"
            // icon={
            //   <RiRoadMapLine color={tabValue === "one" ? "#000000" : "#666666"} />
            // }
            iconPosition="start"
          />
          <StyledTab
            value="two"
            label="EC"
            // icon={
            //   <LiaRouteSolid color={tabValue === "two" ? "#000000" : "#666666"} />
            // }
            iconPosition="start"
          />
          </StyledTabs>
          </Box>
    )
}