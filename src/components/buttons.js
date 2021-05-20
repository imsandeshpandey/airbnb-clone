import styled from "styled-components";
import {
  space,
  color,
  border,
  fontSize,
  fontWeight,
  boxShadow,
  layout,
} from "styled-system";

const RawButton = styled.button`
  outline: none;
  cursor: pointer;
  ${space}
  ${border}
  ${fontSize}
  ${color}
  ${fontWeight}
  ${boxShadow}
  ${layout}
  transition: ${(props) => props.transition};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.small};
  }
`;

RawButton.defaultProps = {
  fontWeight: "light",
  px: 3,
  py: 2,
  borderWidth: 2,
  borderRadius: "3px",
  borderStyle: "solid",
  fontSize: 2,
};

const Button = (props) => (
  <RawButton color="white" bg="primary" {...props} borderColor="primary" />
);

const RawPillButton = (props) => (
  <RawButton {...props} bg="transparent" borderRadius="20px" />
);

const PillButton = (props) => (
  <RawPillButton {...props} color="primary" borderColor="primary" />
);

const TextButton = (props) => (
  <RawButton
    color="primary"
    {...props}
    px={0}
    py={0}
    borderWidth={0}
    boxShadow="none !important"
    bg="transparent"
  />
);
export { Button, PillButton, TextButton };
