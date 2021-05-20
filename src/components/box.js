import styled from "styled-components";
import {
  background,
  border,
  color,
  display,
  flexbox,
  fontWeight,
  layout,
  position,
  shadow,
  space,
  zIndex,
} from "styled-system";

const Box = styled.div`
  ${space}
  ${color}
  ${flexbox}
  ${display}
  ${layout}
  ${position}
  ${background}
  ${border}
  ${shadow}
  ${zIndex}
  ${fontWeight};
  transition: ${(props) => props.transition};
  backdrop-filter: ${(props) => props.backdropFilter};

  cursor: ${(props) => props.cursor};
`;

export default Box;
