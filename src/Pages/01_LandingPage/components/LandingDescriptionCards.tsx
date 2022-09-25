import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AC from "../../../Assets/stock/AC.jpg";
import refrigeration from "../../../Assets/stock/refrigeration.jpg";
import heating from "../../../Assets/stock/heating.jpg";
import tech from "../../../Assets/stock/tech.jpg";
type cardInfoType = {
  title: string;
  desc: string;
  pic: string;
  path: string;
}[];
type cardType = {
  title: string;
  desc: string;
  pic: string;
  path: string;
};

const cardInfo: cardInfoType = [
  {
    title: "AIR CONDITIONING",
    desc: `Our team of certified HVAC Technicians posses the knowledge,
  skill and experience to tackle any of you A/C projects.`,
    pic: AC,
    path: "/airconditioning",
  },
  {
    title: "REFRIGERATION",
    desc: `From walk-in freezers to milk tanks, our refrigeration
  service team are industry leaders.`,
    pic: refrigeration,
    path: "/refrigeration",
  },
  {
    title: "HEATING",
    desc: "With our experience with furnaces and heating products, we can make sure you stay warm during those cold winter days.",
    pic: heating,
    path: "heating",
  },
  {
    title: "SERVICES",
    desc: "Emergency repairs to preventative maintenance, Cam Air is ready to have your equipment running efficiently, so you can run your business be worry free.",
    pic: tech,
    path: "services",
  },
];

const descriptionCardBackgroundPaperSX = {
  width: "90%",
  maxWidth: "600px",
  height: "100%",
  minHeight: "200px",
  borderRadius: 6,
  "&: hover": {
    boxShadow:
      "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
  },
};
const descriptionPictureSX = {
  minHeight: "200px",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  borderTopLeftRadius: 21,
  borderTopRightRadius: { xs: 21, sm: 0 },
  borderBottomLeftRadius: { sm: 21, xs: 0 },
  justifyContent: "flex-end",
};

const outerBoxSX = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: 15,
};

const gridContainerSX = {
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardList = cardInfo.map((card: cardType, i: number) => {
  return (
    <Link
      to={card.path}
      key={i}
      style={{
        display: "flex",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      <Paper elevation={5} sx={descriptionCardBackgroundPaperSX}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={4} xs={12}>
            <Box
              sx={{
                backgroundImage: `url(${card.pic})`,
                ...descriptionPictureSX,
              }}
            />
          </Grid>

          <Grid item sm={8}>
            <Stack spacing={1} mx={4} p={{ xs: 2.5, sm: 0 }}>
              <Typography variant="h6" fontWeight={"bold"} color={"#1976d2"}>
                {card.title}
              </Typography>
              <Typography variant="body1">{card.desc}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
});

const DescriptionCards = () => {
  return (
    <Box sx={outerBoxSX}>
      <Grid container sx={gridContainerSX}>
        <Grid
          item
          xs={12}
          display={"grid"}
          gridTemplateColumns={{
            lg: "repeat(2, 1fr)",
            xs: "repeat(1, 1fr)",
          }}
          rowGap={6}
        >
          {cardList}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DescriptionCards;
