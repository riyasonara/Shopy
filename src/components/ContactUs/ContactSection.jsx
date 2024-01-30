import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 160,
  padding: theme.spacing(2),
  transition: "transform 0.3s ease-in-out", // Adding transition effect
  "&:hover": {
    transform: "scale(1.05)", 
    cursor : "pointer"// Scaling up on hover
  },
}));

const data = [
  {
    heading: "Sales",
    paragraph: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    contact: "1800 123 4567",
  },
  {
    heading: "Complaints",
    paragraph: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    contact: "1900 223 8899",
  },
  {
    heading: "Returns",
    paragraph: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    contact: "returns@mail.com",
  },
  {
    heading: "Marketing",
    paragraph: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    contact: "1700 444 5578",
  },
];

export default function CardList() {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{textAlign:"center", marginTop:"4rem"}}>
        Have any queries?
      </Typography>
      <Typography variant="h3" gutterBottom sx={{textAlign:"center"}}>
        We&apos;re here to help.
      </Typography>
      <div style={{height:"2px",backgroundColor:"gray", width:"170px", margin:"auto",alignContent:"center",border:"1px solid gray" , borderRadius:"20px", marginBottom:"4rem"}}></div>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Box sx={{ p: 2 }}>
              <Item elevation={3}>
                <Typography variant="h5" gutterBottom>
                  {item.heading}
                </Typography>
                <Typography variant="body1">{item.paragraph}</Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#0084d6", marginTop: "5px" }}
                >
                  {item.contact}
                </Typography>
              </Item>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
