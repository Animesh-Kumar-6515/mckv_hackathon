import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ img, text, para }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        height: { xs: "500px", md: "480px" },
        margin: "10px",
      }}
    >
      <CardMedia sx={{ height: 250 }} image={img} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "center",
          }}
        >
          {para}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          sx={{
            margin: "20px auto",
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
