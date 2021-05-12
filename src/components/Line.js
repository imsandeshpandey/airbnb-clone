import styled from "styled-components";
import { color, flex, layout, position, space } from "styled-system";

const Line = styled.hr`
  border: none;
  ${layout}
  ${color}
  ${flex}
  ${position}
  ${space}
`;

Line.defaultProps = {
  bg: "gray",
  my:0,
};

export default Line;
