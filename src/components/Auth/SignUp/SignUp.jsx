import { useState } from "react";
import styles from "./SignUp.module.css";
import { Button, TextField } from "@mui/material";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className={styles.formGroup}>
          <TextField
            onChange={handleChange}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={formData.username}
            required
            fullWidth
          />
        </div>
        <div className={styles.formGroup}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <div className={styles.formGroup}>
        <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <Button variant="contained" className={styles.submitBtn}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
