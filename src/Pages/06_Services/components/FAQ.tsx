import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import theme from "../../../Styles/theme";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid black`,
  borderBottom: `1px solid black`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "2rem", color: theme.palette.primary.main }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const flexCenterSX = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
};

const frameBoxSX = {
  maxWidth: "1200px",
  width: { xs: "90%", lg: "100%" },
  display: "flex",
  flexDirection: "column",
};

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(4),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQ = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Box sx={{ ...flexCenterSX, mb: 15 }}>
      <Box sx={frameBoxSX}>
        <Typography variant="h3" fontWeight={"bold"} py={2}>
          HVAC & Refrigeration FAQ
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{ background: "white" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: theme.palette.primary.main,
                p: 1,
              }}
            >
              Why does temperature matter?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" fontWeight={"bold"}>
              Turns out it’s not just about pleasing fussy people.
            </Typography>
            <Typography>
              {" "}
              <br />
              The people at Harvard have been studying how to make healthier
              buildings for over 40 years. They list temperature as one of the
              nine foundations of a healthy building. Temperature often
              compounds other indoor environmental problems—for example, high
              temperatures increase building material off-gassing, releasing
              irritating and toxic chemicals, like volatile organic compounds
              (VOCs) into the air. 
              <br />
              <br />
              Many people only consider temperature in terms of comfort, but it
              also directly affects productivity. If your temperature is outside
              the optimal range of 20–26°C (68–79°F), for every 0.5°C (1°F) away
              from comfort, productivity decreases by 2%. So, for every degree
              away from comfort, if you take the average Canadian hourly wage,
              then a 2% drop in productivity can cost a business
              $4,200/year/person.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            sx={{ background: "white" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: theme.palette.primary.main,
                p: 1,
              }}
            >
              What temperature should my space be?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" fontWeight={"bold"}>
              Short answer? It all depends on your needs!
            </Typography>
            <Typography>
              <br />
              For example, our customers’ spaces range from commercial offices
              to hot yoga studios—all the way to customers whose entire food
              production area is a massive walk-in cooler!
              <br />
              <br />
              That said, the American Society of Heating, Refrigerating and
              Air-Conditioning Engineers (
              <Link href="https://www.ashrae.org/" target="_blank">
                ASHRAE
              </Link>
              ), Standard 55-2013 suggests maintaining an indoor temperature of
              20 – 26°C (68–79°F). Preferences vary, but this range tends to be
              most comfortable, with 23°C (74°F) as a happy medium for most.
              Every space in your building should ideally be comfortable and
              properly balanced so you don’t find spots where it’s too cold,
              drafty, or too hot.
              <br />
              <br />
              We also recommend setting seasonally-specific temperatures.
              Adjusting to seasonal climates reduces utility costs and is often
              more comfortable than jarring indoor/outdoor temperature swings.
              <br />
              <br />
            </Typography>
            <Typography variant="h6" fontWeight={"bold"}>
              In the winter, aim for 20–24°C (68–75°F) and in the summer, aim
              for 24–27°C (75–81°F).
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            sx={{ background: "white" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: theme.palette.primary.main,
                p: 1,
              }}
            >
              Which refrigerant’s right for my system?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" fontWeight={"bold"}>
              Navigating refrigerant options can be daunting. Our goal is to
              keep it simple for you.
            </Typography>
            <Typography>
              {" "}
              <br />
              For decades we’ve created systems that are cost-effective,
              energy-efficient, durable, and easily serviceable. We’re
              proficient with all refrigerants from Propane (R290) to R404A. We
              can even help with R22 (freon) retrofits if you’re ready to
              convert your equipment to a more sustainable and economically
              viable option. 
              <br />
              <br />
              Most importantly, we’ll work with you to understand your needs and
              recommend options that work for you.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            sx={{ background: "white" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: theme.palette.primary.main,
                p: 1,
              }}
            >
              How can I reduce my air conditioning energy bills?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" fontWeight={"bold"}>
              By using better components, our systems operate more
              efficiently—which pays off in energy savings, component lifecycle,
              and carbon footprint.
            </Typography>
            <Typography>
              <br />
              Retrofitting or modifying existing systems can help reduce your
              energy bills. There may even be rebates available in your area for
              businesses reducing their energy emissions. 
              <br />
              <br />
              Did you know air conditioning alone accounts for roughly 8.5% of
              worldwide electricity use? Canada has higher and lower temperature
              extremes than most countries, so our buildings have to compensate
              for those extremes. That’s just one reason why energy accounts for
              82% of Canada’s total emissions. 
              <br />
              <br />
              We all love saving money, and that’s even more satisfying when
              investments contribute to a sustainable future.
            </Typography>

            <Typography variant="h6" fontWeight={"bold"}>
              <br />
              Here’s some quick tips:{" "}
            </Typography>
            <Typography>
              <ol>
                <li>Make sure your thermostats are in the right locations</li>
                <li>
                  If possible, keep unnecessary lights off and blinds and
                  windows closed, when your air conditioning is running
                </li>
                <li>Manage your humidity</li>
                <li>Only use air conditioning when necessary</li>
                <li>Maintain your air conditioning unit</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            aria-controls="panel5d-content"
            id="panel5d-header"
            sx={{ background: "white" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: theme.palette.primary.main,
                p: 1,
              }}
            >
              What else does Cam Air Service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" fontWeight={"bold"}>
              Hot Food Equipment to Coffee Machines
            </Typography>
            <Typography>
              <br />
              We at Cam Aid don't stop at HVAC and Refrigeration. If your
              commercial kitchen has hot food equipment we can service that too.
              From ovens to fryers, we have you completely covered. 
              <br />
              <br /> 
              We know how important coffee is to every business. So we
              took it upon ourselves to become experts with commercial coffee
              machines. Curtis to Bunn units, we have a vast selection of
              replacement parts in house to get you back up and running asap.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            aria-controls="panel6d-content"
            id="panel6d-header"
            sx={{ background: "white" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: theme.palette.primary.main,
                p: 1,
              }}
            >
              Does Cam Air work safely?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" fontWeight={"bold"}>
              We value our customers’ and employees’ safety above all else.
            </Typography>
            <Typography> 
              <br />
              Our commitment to Safety is one of our core values and we have the
              certification and training to back that up. At Cam Air, we also
              strive as hard to maintain your facility as we would our very own.
            </Typography>
            <Typography variant="h6" fontWeight={"bold"}>
              <br /> Here’s what you can expect from our team. At Cam Air, we:
            </Typography>
            <Typography>
              <ul>
                <li>Continuously audit and improve our safety program</li>
                <li>Are vendor-trained for specialized equipment</li>
                <li>
                  Have the knowledge, experience, and training required to
                  successfully complete work in any facility
                </li>
                <li>
                  Ensure all team members pass full security background checks
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
