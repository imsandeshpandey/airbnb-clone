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
      backgroundSize="contain"
      display="flex"
      justifyContent="center"
      pt={[40, 80]}
      pb={[20, 30]}
    >
      <Box
        // footer content group

        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height={[100, 150]}
      >
        <Branding size={[25, 40]} />
        <NavMenu
          navItems={navItems}
          px={[2, 3, 4]}
          size={["10px", "14px", "16px"]}
        />
        <Text fontSize={["10px", 1]} color="gray">
          Copyright @ 2021 RedQ, Inc.
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
