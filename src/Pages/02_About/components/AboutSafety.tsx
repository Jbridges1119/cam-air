import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import family from "../../../Assets/stock/family.jpg";

const flexCenterSX = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
};

const familyPictureSX = {
  backgroundImage: `url(${family})`,
  height: "300px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "flex-end",
};

const frameBoxSX = {
  maxWidth: "1200px",
  width: { xs: "90%", lg: "100%" },
  display: "flex",
  flexDirection: "column",
};

const AboutSafety = () => {
  return (
    <Box sx={{ ...flexCenterSX, mt: 6 }}>
      <Box sx={frameBoxSX}>
        <Typography variant="h3" fontWeight={"bold"} py={2}>
          We believe everyone has the right to go home when the job is done and
          one accident is one too many.
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={7} xs={11}>
            <Typography variant="h6" fontWeight={"lighter"} mb={4}>
              {" "}
              Health and safety is an integral part of our corporate culture,
              from the owner to the staff everyone is responsible for ensuring
              the health and safety of our employees, subcontractors, clients
              and the public.
              <br />
              <br />
              By providing resources and training, encouraging teamwork,
              reinforcing positive behaviors, incorporating applicable
              legislation and adopting industry best practices, Gateway
              continuously monitors, audits and improves our health and safety
              program.
            </Typography>
          </Grid>
          <Grid item sm={5} xs={12}>
            <Box 
            
            sx={familyPictureSX} />
          </Grid>{" "}
        </Grid>

        <Typography variant="h4" fontWeight={"bold"} py={2}>
          Cam Air is committed to:
        </Typography>
        <Typography variant="h6" fontWeight={"lighter"} mb={10}>
          <ul>
            <li>
              Work together with our employees to consult, cooperate and achieve
              excellence in safety performance.
            </li>
            <li>
              Provide proper training, equipment, systems, and tools to ensure
              the health and safety of our employees and subcontractors.
            </li>
            <li>
              Continuously assess, audit and improve our health and safety
              program to reduce the risk of injury in a changing work
              environment.
            </li>
            <li>
              Protect the environment from any adverse effects of our operations
              and recycle, as well as promote the use of recycled products where
              possible.
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSafety;
