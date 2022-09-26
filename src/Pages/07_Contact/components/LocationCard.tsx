import React from "react";
//MUI
import { Box, Divider, Grid, Link, Stack, styled, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
//Style
import location from "../../../Assets/location.png";

const PlainLink = styled(Link)`
  color: white;
  text-decoration: none;
  pt: 0.7;
`;
const WhiteTypoLink = styled(Typography)`
  color: white;
  text-decoration: underline;
  :hover {
    text-decoration: none;
  }
`;
const WhiteTypo = styled(Typography)`
  color: white;
`;

const pictureSX = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${location})`,
  minHeight: "325px",
  width: "900px",
  maxWidth: { md: "900px", xs: "100%" },
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
};
const FlexGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const stackSX = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
}
const dividerSX = { width:'70px', backgroundColor:'white', height:'5px',mt:1, mb:8,}
const LocationCard = () => {
  return (
    <Box sx={pictureSX}>
      <Stack
        sx={stackSX}
      >
        <PlaceIcon sx={{ fontSize: "60px", color: "white" }} />
        <WhiteTypo variant="h5" >Lethbridge Office</WhiteTypo>
    <Divider sx={dividerSX}></Divider>
        <FlexGrid container width="100%">
          <FlexGrid item md={6} xs={11}>
            <WhiteTypo variant="h6">
              Phone: &nbsp;
              <PlainLink href="tel:4033206690">
                <WhiteTypoLink variant="body1" display={"inline"}>
                  403.320.6690
                </WhiteTypoLink>
              </PlainLink>
            </WhiteTypo>
          </FlexGrid>
          <FlexGrid item md={6} xs={12}>
            <Box sx={{ display: "inline" }}>
              <WhiteTypo variant="h6" display={"inline"}>
                Email: &nbsp;
              </WhiteTypo>
              <PlainLink href="mailto:Info@camairrefrigeration.com">
                <WhiteTypoLink variant="body1" display={"inline"}>
                  Info@CamAirRefrigeration.com
                </WhiteTypoLink>
              </PlainLink>
            </Box>
          </FlexGrid>
          <FlexGrid item md={6} xs={12}>
            <WhiteTypo variant="body1">
              313 13 St N, Lethbridge, AB T1H 2R9
            </WhiteTypo>
          </FlexGrid>
          <FlexGrid item md={6} xs={12}>
            <PlainLink
              href="https://goo.gl/maps/gWWu2Dg71Jk96NYX9"
              target="_blank"
            >
              <WhiteTypoLink variant="body1">Get Directions</WhiteTypoLink>
            </PlainLink>
          </FlexGrid>
        </FlexGrid>
      </Stack>
    </Box>
  );
};

export default LocationCard;
