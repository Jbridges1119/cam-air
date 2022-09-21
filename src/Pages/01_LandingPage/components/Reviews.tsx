import React, { useState } from "react";
//Bootstrap
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
//MUI
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

type reviewsType = {
  name: string;
  review: string;
}[]
const reviews: reviewsType = [
  {
    name: "Jonathan Harris",
    review: `I'm a new business owner and didn't have any one I knew to
service fridges. I was connected to Cam Air through a warranty
issue with Fetco coffee brewer. Service was amazing. They solved
our problem as fast possible, which helped us tremendously. (we
where only down that coffee brewer for 48 hours) Since, then
they've helped us problem solve a number of problems at our
business. They have been helpful, resourceful and fair.
Call and ask for Billy or Mark. They are the best!`,
  },
  {
    name: "Matt Hollwey",
    review: `Bar none the best commercial a/c company in town. Mark serviced
our equipment for 20 years and without him and his service there
wouldn't have been a company. He has gone above and beyond for
my family countless times and I highly recommend him to any one
looking for commercial heating or cooling.`,
  },
  {
    name: "Laura Ford",
    review: `It was great! So helpful and they did an awesome job!`,
  },
  {
    name: "Jonathan Harris",
    review: `Great service, personable and they really want to see businesses
grow. Mark, Billy and the team are good people.`,
  },
  { name: "Brian Rodgers", review: `Great service!` },
  { name: "Fates Paladin", review: `Awesome service` },
];

const flexCenterSX = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const ReviewCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const value = 5;
  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
type reviewType = {
  name: string;
  review: string
}
  const reviewList = reviews.map((review: reviewType) => {
    return (
      <Carousel.Item>
        <Box
          sx={{
            height: { xs: "450px", sm: "200px" },
            width: "100%",
            ...flexCenterSX,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", m: 1 }}
          >
            {review.name}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 1 }}>
            {review.review}
          </Typography>
          <Rating name="read-only" value={value} readOnly />
        </Box>
      </Carousel.Item>
    );
  });

  return (
    <Box
      sx={{...flexCenterSX, m:3}}
    >
      <Box
        sx={{
          maxWidth: "1200px",
        }}
      >
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{ width: "100%", padding: 30 }}
          controls={false}
        >
          {reviewList}
        </Carousel>
      </Box>
    </Box>
  );
};

export default ReviewCarousel;
