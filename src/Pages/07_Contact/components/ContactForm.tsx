import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
//MUI
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LoadingButton from "@mui/lab/LoadingButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../../Styles/theme";
//Style

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
const contactButtonSX = {
  background: theme.palette.primary.main,
  color: "white",
  m: 1.5,
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
    setSubmitting(true);
    await postSubmission();
  };
  console.log(formState);

  const postSubmission = async () => {
    const payload = {
      ...formState,
    };
    console.log("payload", payload);

    // try {
    //   await axios.post(
    //     `https://formsubmit.co/ajax/jbridges1119@gmail.com`,
    //     payload
    //   );
    //   setMessage([
    //     "Message Was Sent!",
    //     "We will get back to you as soon as possible.",
    //     true,
    //   ]);
    //   setInputActive(false);
    //   setFormState(initialFormState);
    // } catch (error) {
    //   console.log(error);
    //   setMessage([
    //     "Message Has Failed!",
    //     "Uh oh, something went wrong. Maybe try calling or emailing us",
    //     false,
    //   ]);
    //   setInputActive(false);
    // }
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
    { item: "First Name", grid: 6, row: 1 },
    { item: "Last Name", grid: 6, row: 1 },
    { item: "Company Name", grid: 12, row: 1 },
    { item: "Phone", grid: 6, row: 1 },
    { item: "Email", grid: 6, row: 1 },
    { item: "City", grid: 12, row: 1 },
    { item: "How Can We Help", grid: 12, row: 6 },
  ];
  const formInputs = formLabels.map((input, i: number) => {
    const label = input as unknown as keyof FormState;
    return (
      <Grid item xs={12} md={input.grid} sx={{ p: 1, width: "100%" }} key={i}>
        <TextField
          key={label}
          id={input.item}
          onChange={updateFormControl}
          label={input.item}
          variant="outlined"
          multiline
          rows={input.row}
          value={formState[label]}
          required
          disabled={submitting}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderRadius: "10px" },
            },
            borderRadius: "10px",
            backgroundColor: "white",
            width: "100%",
          }}
        />
      </Grid>
    );
  });

  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        my: 4,
        py: 6,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "800px" }}>
        {inputActive ? (
          <form noValidate autoComplete="off" onSubmit={submitForm}>
            <Grid container display="flex" width="100%">
              {formInputs}
            </Grid>

            <LoadingButton
              type="submit"
              sx={contactButtonSX}
              loading={submitting}
            >
              SUBMIT
            </LoadingButton>
          </form>
        ) : (
          <Box
            height={"400px"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Stack spacing={3}>
              {message[2] ? (
                <CheckCircleOutlineIcon
                  sx={{
                    color: "green",
                    fontSize: "6em",
                    height: "2em",
                    width: "100%",
                  }}
                />
              ) : (
                <>
                  <CloseIcon
                    sx={{
                      color: "red",
                      fontSize: "4em",
                      height: "2em",
                      width: "100%",
                    }}
                  />
                </>
              )}
              <Typography mt={2} color={"#4345E8"} variant="h4">
                {message[0]}
              </Typography>
              <Typography variant="h6">{message[1]}</Typography>
            </Stack>
          </Box>
        )}
      </Box>{" "}
    </Box>
  );
};

export default Form;
