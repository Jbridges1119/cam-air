import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
//MUI
import { Box, Grid, Stack, styled, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../../Styles/theme";
//reCaptcha
import Recaptcha from "react-recaptcha";

type FormState = {
  "First Name": string;
  "Last Name": string;
  "Company Name": string;
  Phone: string;
  Email: string;
  City: string;
  "How Can We Help": string;
};

type ServiceMessage = [string, string, boolean];

const textFieldSX = {
  "& .MuiOutlinedInput-root": {
    "& > fieldset": { borderRadius: "10px" },
  },
  borderRadius: "10px",
  backgroundColor: "white",
  width: "100%",
};

const contactButtonSX = {
  background: theme.palette.primary.main,
  color: "white",
  my: 1.5,
  fontSize: { sm: "20px", xs: "20px" },
  fontWeight: "lighter",
  py: 1.5,
  px: 3,
  border: "2px solid #1976d2",
  borderRadius: 2,
  "&:hover": {
    background: "none",
    color: theme.palette.primary.main,
  },
};
const OuterBox = styled(Box)`
  background-color: #f0f0f0;
  margin-top: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MessageBox = styled(Box)`
display: "flex",
justify-content: "center",
align-items: "center",
align-content: "center",
height: '582px'
`;
const RedCloseIcon = styled(CloseIcon)`
  color: red;
  font-size: 4em;
  height: 2em;
  width: 100%;
`;

const GreenCheckCircleOutlineIcon = styled(CheckCircleOutlineIcon)`
  color: green;
  font-size: 6em;
  height: 2em;
  width: 100%;
`;
const Form: React.FC = () => {
  const initialFormState = {
    "First Name": "",
    "Last Name": "",
    "Company Name": "",
    Phone: "",
    Email: "",
    City: "",
    "How Can We Help": "",
  };
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [message, setMessage] = useState<ServiceMessage>(["", "", true]);
  const [inputActive, setInputActive] = useState<boolean>(true);
  const [captcha, setCaptcha] = useState<boolean>(false);
  //Form logic
  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    if (!formState["First Name"]) return alert("Please enter your first name");
    if (!formState["Last Name"]) return alert("Please enter your last name");
    if (!formState["Company Name"])
      return alert("Please enter your company name");
    if (!formState.Phone || formState.Phone.length < 10)
      return alert("Please enter your phone number (XXX-XXX-XXXX)");
    if (
      !formState.Email ||
      !formState.Email.includes("@") ||
      !formState.Email.includes(".com")
    )
      return alert("Please enter valid email so I can get back to you");
    if (!formState["How Can We Help"])
      return alert("Please leave us a message");
    if (!captcha) return alert("Are you a robot?");
    setSubmitting(true);
    await postSubmission();
  };
  const recaotchaLoaded = () => {
    setCaptcha(true);
  };
  //Axios call with response to user
  const postSubmission = async () => {
    const payload = {
      ...formState,
    };
    console.log("payload", payload);

    try {
      await axios.post(
        `https://formsubmit.co/ajax/jbridges1119@gmail.com`,
        payload
      );
      setMessage([
        "Message Was Sent!",
        "We will get back to you as soon as possible.",
        true,
      ]);
      setInputActive(false);
      setFormState(initialFormState);
    } catch (error) {
      console.log(error);
      setMessage([
        "Message Has Failed!",
        "Uh oh, something went wrong. Maybe try calling or emailing us.",
        false,
      ]);
      setInputActive(false);
    }
  };

  //ChangeEvent is a generic type
  const updateFormControl = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    //id as keyof FormState; allows access for use in updated FormState
    const formKey = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };

  const formLabels = [
    { item: "First Name", grid: 5.9, row: 1, required: true },
    { item: "Last Name", grid: 5.9, row: 1, required: true },
    { item: "Company Name", grid: 12, row: 1, required: true },
    { item: "Phone", grid: 5.9, row: 1, required: true },
    { item: "Email", grid: 5.9, row: 1, required: true },
    { item: "City", grid: 12, row: 1, required: false },
    { item: "How Can We Help", grid: 12, row: 6, required: true },
  ];
  const formInputs = formLabels.map((input, i: number) => {
    const label = input as unknown as keyof FormState;
    return (
      <Grid item xs={12} md={input.grid} sx={{ py: 1, width: "100%" }} key={i}>
        <TextField
          key={label}
          id={input.item}
          onChange={updateFormControl}
          label={input.item}
          variant="outlined"
          multiline
          rows={input.row}
          value={formState[label]}
          required={input.required}
          disabled={submitting}
          sx={textFieldSX}
        />
      </Grid>
    );
  });

  return (
    <OuterBox>
      <Box sx={{ maxWidth: "800px", width: "90%" }}>
        <Typography variant="h4" fontWeight={"bold"}>
          Send us an email
        </Typography>
        <Typography variant="h6" fontWeight={"lighter"} mb={6}>
          Cam Air Refrigeration and Heating is ready to help. Our technicians
          can be on site right away to rectify any emergencies that need
          immediate attention. We have the team and expertise you need with a
          personal level of service.
        </Typography>
        {inputActive ? (
          <form noValidate autoComplete="off" onSubmit={submitForm}>
            <Typography variant="body2">* Required</Typography>
            <Grid
              container
              display="flex"
              justifyContent={"space-between"}
              width="100%"
            >
              {formInputs}
            </Grid>
            <Recaptcha
              sitekey={`${process.env.REACT_APP_RECAPTCHA_ID}`}
              render="explicit"
              onloadCallback={recaotchaLoaded}
            />

            <LoadingButton
              type="submit"
              sx={contactButtonSX}
              loading={submitting}
            >
              SUBMIT
            </LoadingButton>
          </form>
        ) : (
          <MessageBox>
            <Stack spacing={3}>
              {message[2] ? <GreenCheckCircleOutlineIcon /> : <RedCloseIcon />}
              <Typography
                mt={2}
                fontWeight={"bold"}
                variant="h4"
                textAlign={"center"}
              >
                {message[0]}
              </Typography>
              <Typography variant="h6" textAlign={"center"}>
                {message[1]}
              </Typography>
            </Stack>
          </MessageBox>
        )}
      </Box>
    </OuterBox>
  );
};

export default Form;
