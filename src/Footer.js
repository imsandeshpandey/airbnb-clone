import React from "react";
import Box from "./components/box";
import Branding from "./components/Branding";
import NavMenu from "./components/NavMenu";
import Text from "./components/typography";
const navItems = ["Hotels", "Listings", "Agent", "Privacy", "Pricing"];

function Footer() {
  return (
    <Box
      // footer
      bg="white"
      backgroundImage="url('https://tripfinder-redq.firebaseapp.com/static/media/footer-bg.ca99d536.svg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      height="250px"
      display="flex"
      justifyContent="center"
    >
      <Box
        // footer content group
        mt={80}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="150px"
      >
        <Branding size="40px" />
        <NavMenu navItems={navItems} size="16px" />
        <Text color="gray">Copyright @ 2021 RedQ, Inc.</Text>
      </Box>
    </Box>
  );
}

export default Footer;
