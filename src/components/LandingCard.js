import Box from "./box";
import Text from "./typography";
import FindHotelsRow from "./FindHotelsRow";

const LandingCard = () => {
  return (
    <Box
      // landing card
      bg="#ffffff"
      px={[5, 6, 7]}
      py={6}
      mx={7}
      minHeight="150px"
      width={["80%", "354px", "88%"]}
      maxWidth="1100px"
      borderRadius="7px"
      boxShadow="large"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      zIndex="1"
      mb={[30,50]}
    >
      <Box
        // text area
        mb="20px"
      >
        <Text
          mb={[0,1,2]}
          fontSize={["26px", "32px", "32px"]}
          fontWeight="600"
          letterSpacing="0px"
          textShadow="2px 2px 0px #F80146cc -2px -2px 0px blue"

        >
          Latest reviews. Lowest prices.
        </Text>
        <Text display ={["none","block"]} >
          compares prices from 200+ booking sites to help you find the lowest
          price on the right hotel for you.
        </Text>
      </Box>
      <FindHotelsRow />
    </Box>
  );
};

export default LandingCard;
