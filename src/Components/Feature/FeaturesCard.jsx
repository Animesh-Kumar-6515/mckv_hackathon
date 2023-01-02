import * as React from "react";
import {
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function MediaCard({ img, text, para, btn, dir }) {
  return (
    <Card
      sx={{ borderRadius: 0, display: dir === "column" ? { md: "flex" } : {} }}
    >
      <CardMedia
        component="img"
        sx={{ height: 282 }}
        image={img}
        title="mckv hackathon"
      />
      <Box>
        <CardContent
          sx={{
            marginTop: "15px",
            height: "180px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            sx={{ fontFamily: "Oswald, sans-serif", textAlign: "center" }}
          >
            {text}
          </Typography>
          <Typography
            gutterBottom
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
            {btn}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
