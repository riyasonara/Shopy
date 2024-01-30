import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 180,
  padding: theme.spacing(2),
  transition: "transform 0.3s ease-in-out", // Adding transition effect
  "&:hover": {
    transform: "scale(1.05)", 
    cursor : "pointer"// Scaling up on hover
  },
}));

const data = [
  {
    icon: <FaGlobeAmericas />,
    heading: "Worldwide Shipping",
    paragraph:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: <GiClothes />,
    heading: "Best Quality",
    paragraph:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: <MdOutlineLocalOffer />,
    heading: "Best Offers",
    paragraph:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: <RiSecurePaymentLine />,
    heading: "Secure Payments",
    paragraph:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

export default function TrustedSection() {
  return (
    <>
      <Grid container sx={{height:"300px", marginTop:"20px"}} spacing={3}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Box sx={{ p: 2 }}>
              <Item elevation={3}>
                <Typography variant="h4" gutterBottom>
                  {item.icon}
                </Typography>
                <Typography variant="h5" color="rgb(61, 59, 64)">{item.heading}</Typography>
                <Typography variant="body1" color="rgb(61, 59, 64)" sx={{ marginTop: "5px" }}>
                  {item.paragraph}
                </Typography>
              </Item>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
