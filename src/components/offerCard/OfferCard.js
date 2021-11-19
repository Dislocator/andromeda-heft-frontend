import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MdOutlineLocalOffer } from "react-icons/md";
import React from "react";

const OfferCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div
          style={{
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MdOutlineLocalOffer style={{ width: 128, height: 128 }} />
        </div>
        <Typography variant="h4" component="div" gutterBottom>
          Year Subscription
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - Subscription for 1 year long - Full Access
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{ position: "relative", top: 5, left: 0 }}
        >
          €
        </Typography>
        <Typography variant="h3">19.99</Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="contained">Select</Button>
      </CardActions>
    </Card>
  );
};

export default OfferCard;
