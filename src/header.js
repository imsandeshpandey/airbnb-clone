import React, { useState } from "react";
import Box from "./components/box";
import { Button, TextButton } from "./components/buttons";
import Icon from "./components/Icon";
import { IoMenu } from "react-icons/io5";
import Branding from "./components/Branding";
import NavMenu from "./components/NavMenu";
import SignInandUp from "./components/SignInandUp";
import Sidebar from "./components/Sidebar";
const navItems = ["Hotels", "Listings", "Agent", "Pricing"];

function Header() {
  const [top, setTop] = useState(true);
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    currentScrollPos > 82 ? setTop(false) : setTop(true);
  };

  const signInProps = {
    color: top ? "white" : "#000",
  };

  const signUpProps = {
    borderRadius: top ? "default" : "20px",
    bg: top ? "primary" : "transparent",
    color: top ? "white" : "primary",
    fontWeight: top ? "regular" : "bold",
    transition: "all 0.075s linear 0.075s",
  };
  return (
    <Box
      // Header
      name="Header"
      display="flex"
      justifyContent="space-between"
      height={["62px", "82px"]}
      alignItems="center"
      py={4}
      px={7}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="2"
    >
      <Box
        position="absolute"
        bg="white"
        height={[62, 82]}
        width="100%"
        boxShadow={top ? "none" : "medium"}
        top={top ? -82 : 0}
        left="0"
        transition="all 0.15s linear"
        zIndex="-1"
      />
      <Box
        // burger menu button
        cursor="pointer"
        onClick={() => console.log("hi")}
        display={["flex", "flex", "none"]}
        alignItems="center"
      >
        <Icon as={IoMenu} color={top ? "white" : "#2c2c2c"} fontSize={28} />
      </Box>
      <Branding white={top} size={["30px", "40px"]} />

      <Box
        // header menu
        display={["none", "none", "flex"]}
        height="45px"
      >
        <NavMenu
          navItems={navItems}
          color={top ? "white" : "black"}
          transition="all 0.075s linear 0.075s"
        />

        <SignInandUp
          signInml={["20px", "40px", "100px"]}
          signInmr={4}
          signInProps={signInProps}
          signUpProps={signUpProps}
        />
        <Sidebar />
      </Box>
    </Box>
  );
}

export default Header;
