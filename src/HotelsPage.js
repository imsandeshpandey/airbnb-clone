import React from "react";
import Box from "./components/box";
import LandingCard from "./components/LandingCard";

const HotelsPage = () => {
  return (
    <Box
      // hotels
      mt="-82px"
      height="calc(100vh + 82px)"
      backgroundImage="url('https://tripfinder-redq.firebaseapp.com/static/media/3.b9923e48.jpg')"
      backgroundPosition="center"
      display="flex"
      position="relative"
      justifyContent={["center", "left", "center"]}
      alignItems="flex-end"
    >
      <Box
        // dark overlay
        position="absolute"
        height="100%"
        width="100%"
        top="0"
        left="0"
        background="linear-gradient(#00000044, transparent, #00000066)"
      />
      <LandingCard />
    </Box>
  );
};

export default HotelsPage;
