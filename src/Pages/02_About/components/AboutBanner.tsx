//MUI
import { Box, Grid, Stack, Typography } from "@mui/material";
//Style
import warmDay from "../../../Assets/stock/warmDay.jpg";
import theme from "../../../Styles/theme";

const bannerHeightSX = { height: "600px" };
const backgroundColor: string = theme.palette.secondary.main;
const backgroundBoxSX = {
  width: "100%",
  background: backgroundColor,
  ...bannerHeightSX,
};

const pictureSX = {
  backgroundImage: `url(${warmDay})`,
  ...bannerHeightSX,
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "flex-end",
  mt:2
};
const pictureAngleSX = {
  clipPath: `polygon(0 0, 100% 0%, 100% 100%, 100% 100%)`,
  ...bannerHeightSX,
  width: "20%",
  background: backgroundColor,
};
const textStackSX = {
  my: { sm: 4, xs: 0 },
  py: { xs: 4, lg: 10 },
  maxWidth: "550px",
  mx: 4,
};

const textBoxSX = {
  ...bannerHeightSX,
  width: "100%",
  display: "flex",
  alignItems: "center",
};

const AboutBanner = () => {
  return (
    <Box sx={backgroundBoxSX}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={0} md={6}>
          <Box sx={pictureSX}>
            <Box sx={pictureAngleSX}></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={textBoxSX}>
            <Stack spacing={3} sx={textStackSX}>
              <Typography
                variant="h5"
                sx={{ color: "white", fontWeight: "lighter" }}
              >
                Helping other small businesses achieve their goals
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Work is not just something we do, it’s what we love.
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "lighter" }}
              >
                Our team works collaboratively, sharing information to bring a
                “can do” approach to any opportunity or problem. Together, we
                aim to achieve the best results and customer service each and
                every time.
                <br />
                <br />
                We have a passion for the work we do and our employees exemplify
                this every day. This passion coupled with an uncompromising
                commitment to excellence drives everything we do.
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutBanner;
