import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import styles from "./ContactForm.module.css";

const StyledTextField = styled(TextField)({
  marginBottom: "1.5rem",
});

const StyledButton = styled(Button)({
  marginTop: "1rem",
});

const ContactForm = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <Typography variant="h6" gutterBottom>
          Don&apos;t be a stranger!
        </Typography>
        <Typography variant="h3" gutterBottom>
          You tell us. We listen.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl,
          eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna
          vehicula et. Nam mattis est sed tellus.
        </Typography>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.form}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { marginBottom: "1.5rem" },
            }}
            noValidate
            autoComplete="off"
          >
            <StyledTextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
            />
            <StyledTextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              fullWidth
            />
            <StyledTextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <StyledTextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
            <StyledButton variant="contained" size="large">
              Send Message
            </StyledButton>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
