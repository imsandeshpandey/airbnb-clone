import React, { useState } from "react";
import { IoCalendar, IoLocation, IoPeople } from "react-icons/io5";
import Input from "./Input";
import Icon from "./Icon";
import { Button } from "./buttons";
import Box from "./box";
import Dropdown from "./dropdown";
import Line from "./Line";
import DatePicker from "./DatePicker";

const InputWithIcon = ({ icon, ...props }) => {
  return (
    <Box width="100%" display="flex" alignItems="center">
      {icon && <Icon color="primary" as={icon} mr={1} minWidth="17px" />}
      <Input
        type="text"
        color="black"
        fontSize={1}
        bg="transparent"
        {...props}
      />
    </Box>
  );
};

const FindHotelsContent = (props) => (
  <Box
    display="flex"
    flex={props.flex}
    alignItems="center"
    minHeight={["50px","60px"]}
    width={["100%", "100%", "fit-content"]}
    {...props}
  />
);

const FindHotelsRow = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  function handleChange({ target: { value } }) {
    setInput(value);
    if (value.length === 0 && open) setOpen(false);

    if (value.length > 0 && !open) setOpen(true);
  }

  return (
    <Box
      // find hotels
      display="flex"
      bg="#2c2c2c11"
      borderRadius="4px"
      flexDirection={["column", "column", "row"]}
      // border="light"
    >
      <Box
        px={3}
        display="flex"
        flex="0.85"
        height={["fit-content", "fit-content", "60px"]}
        alignItems={["flex-start", "flex-start", "center"]}
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
      >
        <Dropdown
          setOpen={setOpen}
          open={open}
          flex="0.28"
          width="100%"
          buttonComponent={
            <FindHotelsContent
            
            // location picker
            >
              <InputWithIcon
                placeholder='Search "Thailand,Asia"'
                icon={IoLocation}
                value={input}
                onChange={handleChange}
              />
            </FindHotelsContent>
          }
          dropdownContent={
            <>
              <Dropdown.Item cursor="pointer">Sandesh</Dropdown.Item>
              <Dropdown.Item>Hello World</Dropdown.Item>
            </>
          }
        />
        <Line
          bg="#ddd"
          height={["1px", "1px", "10px"]}
          width={["100%", "100%", "1px"]}
        />
        {/* Start end dates */}
        <FindHotelsContent flex="0.4">
        <Icon color="primary" as={IoCalendar} mr={0} />
          <DatePicker/>
        </FindHotelsContent>
        <Line
          bg="#ddd"
          height={["1px", "1px", "10px"]}
          width={["100%", "100%", "1px"]}
        />
        {/* Guests and rooms  */}
        <FindHotelsContent mr={[0, 0, 3]} flex="0.28">
          <InputWithIcon width="100%" icon={IoPeople} placeholder="Guests" />
          <Line width="10px" height="1px"></Line>
          <InputWithIcon width="100%" textAlign="right" placeholder="Rooms" />
        </FindHotelsContent>
      </Box>
      {/* Submit Button */}
      <Box display="flex" flex="0.15">
        <Button
          fontSize={1}
          height="100%"
          width="100%"
          py={[1, 3, 0]}
          borderRadius={["0 0 4px 4px", "0 0 4px 4px", "0 4px 4px 0"]}
        >
          Find Hotels
        </Button>
      </Box>
    </Box>
  );
};

export default FindHotelsRow;
