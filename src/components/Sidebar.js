import React from "react";
import Box from "./box";
import Branding from "./Branding";
import NavMenu from "./NavMenu";
import SignInandUp from "./SignInandUp";
const navItems = ["Hotels", "Listings", "Agent", "Pricing"];

const signUpProps = {
  width: "100%",
  borderRadius: 0,
  fontSize: 2,
};

const Sidebar = () => {
  return (
    <Box
      bg="white"
      width={300}
      height="100vh"
      position="fixed"
      top={0}
      left={0}
      transition="0.15s linear"
      boxShadow="large"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" alignItems="center" height="82px">
          <Branding size={40} />
        </Box>

        <NavMenu
          mt={40}
          mb={20}
          signUpProps={{ py: "0px", color: "blue" }}
          color="black"
          flexDirection="column"
          navItems={navItems}
        />
        <SignInandUp signUpProps={signUpProps} vertical width="100%" />
      </Box>
    </Box>
  );
};

export default Sidebar;
