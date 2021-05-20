import React from "react";
import Box from "./components/box";
import LandingCard from "./components/LandingCard";

const HotelsPage = () => {
  return (
    <Box>
      <Box
        // hotels hero-section
        height="100vh"
        backgroundImage="url('https://tripfinder-redq.firebaseapp.com/static/media/3.b9923e48.jpg')"
        backgroundRepeat="no-repeat"
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
    </Box>
  );
};

export default HotelsPage;
