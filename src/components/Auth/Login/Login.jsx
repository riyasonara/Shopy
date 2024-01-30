import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import styles from "./Login.module.css";
import backgroundImage from "../../../assets/shopping2.jpg"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.container}>
      {/* Background image container */}
      <div className={styles.backgroundImageContainer}>
        <img
          src={backgroundImage}
          alt="Background"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.container}>
        <Card className={styles.card}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ marginBottom: "20px", textAlign: "center" }}
            >
              Login
            </Typography>
            <form onSubmit={handleSubmit} className={styles.form}>
              <TextField
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                className={styles.textField}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                className={styles.textField}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={styles.submitButton}
              >
                Login
              </Button>
            </form>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              Don&apos;t have an account? <Link to="/signup">Sign up</Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
