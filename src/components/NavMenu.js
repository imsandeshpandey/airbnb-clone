import Box from "./box";
import Text from "./typography";

const NavMenu = ({ navItems, size, color, ...props }) => (
  <Box display="flex" alignItems="center" {...props}>
    {navItems.map((data, key) => (
      <Box cursor="pointer" px={5} py={4} key={key}>
        <Text fontWeight="regular" color={color} fontSize={size}>
          {data}
        </Text>
      </Box>
    ))}
  </Box>
);

export default NavMenu;
