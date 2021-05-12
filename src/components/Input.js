import styled from "styled-components";
import {
  border,
  boxShadow,
  color,
  fontSize,
  layout,
  space,
  textAlign,
  display
} from "styled-system";

const Input = styled.input`
  ${color}
  ${space}
  ${layout}
  ${boxShadow}
  ${fontSize}
  ${textAlign}
  ${display}
  border:none;
  &:focus {
    outline: none;
    ${border}
  }
`;

Input.defaultProps = {
  border: "none",
  bg: "#2c2c2c11",
};
export default Input;
