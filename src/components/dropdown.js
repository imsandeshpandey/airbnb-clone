import React from "react";
import { IoLocation } from "react-icons/io5";
import Box from "./box";
import Icon from "./Icon";
import Overlay from "./overlay";

const Dropdown = ({
  buttonComponent,
  dropdownContent,
  open,
  setOpen,
  ...props
}) => {
  return (
    <Box zIndex="2" position="relative" {...props}>
      {buttonComponent}
      {open && (
        <Box
          position="absolute"
          minWidth="100%"
          top="100% "
          left={0}
          bg="white"
          py={1}
          boxShadow="large"
          borderRadius="default"
          transition="0.2s"
        >
          <Overlay onClick={() => setOpen(!open)} />
          {dropdownContent}
        </Box>
      )}
    </Box>
  );
};

const DropdownItem = ({ children, ...props }) => (
  <>
    <Box
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={3}
      fontWeight="bold"
      {...props}
    >
      <Icon color="gray" minWidth="22px" as={IoLocation} pr={2} />
      {children}
    </Box>
  </>
);

Dropdown.Item = DropdownItem;

export default Dropdown;
