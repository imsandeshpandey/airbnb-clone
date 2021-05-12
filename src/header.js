import React from "react";
import Box from "./components/box";
import { Button, TextButton } from "./components/buttons";
import Icon from "./components/Icon";
import { IoMenu } from "react-icons/io5";
import Branding from "./components/Branding";
import NavMenu from "./components/NavMenu";
const navItems = ["Hotels", "Listings", "Agent", "Pricing"];

function Header() {
  return (
    <Box
      // Header
      name="Header"
      display="flex"
      justifyContent="space-between"
      maxHeight="82px"
      alignItems="center"
      py={4}
      px={7}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="1"
    >
      <Branding white size="40px" />

      <Box
        // header menu
        display={["none", "none", "flex"]}
      >
        <NavMenu navItems={navItems} color="white" />

        <TextButton
          // sign in button
          mx={5}
          my={4}
          ml={["20px", "40px", "100px"]}
          fontSize={1}
          color="white"
        >
          Sign in
        </TextButton>

        <Button
          // sign up button
          fontSize={1}
          mx={0}
        >
          Sign up
        </Button>
      </Box>
      <Box
        // burger menu button
        cursor="pointer"
        onClick={() => console.log("hi")}
        display={["flex", "flex", "none"]}
        alignItems="center"
      >
        <Icon as={IoMenu} color="white" fontSize={28} />
      </Box>
    </Box>
  );
}

export default Header;
