import styled from "styled-components";
import {
  color,
  fontSize,
  space,
  fontWeight,
  letterSpacing,
  textShadow,
  display,
} from "styled-system";

const Text = styled.div`
  ${color}
  ${fontSize}
    ${space}
    ${fontWeight}
    ${letterSpacing}
    ${textShadow}
    ${display}
`;
Text.defaultProps = {
  color: "black",
  fontSize: 1,
};
const H1 = (props) => (
  <Text
    color="black"
    letterSpacing="1px"
    {...props}
    fontSize="7"
    fontWeight="strong"
  />
);
const H2 = (props) => (
  <Text
    color="black"
    letterSpacing="1px"
    {...props}
    fontSize="6"
    fontWeight="strong"
  />
);
const H3 = (props) => (
  <Text
    color="black"
    letterSpacing="1px"
    {...props}
    fontSize="5"
    fontWeight="bolder"
  />
);
const H4 = (props) => (
  <Text
    color="black"
    letterSpacing="1px"
    {...props}
    fontSize="4"
    fontWeight="bolder"
  />
);
const H5 = (props) => (
  <Text
    color="black"
    letterSpacing="1px"
    {...props}
    fontSize="3"
    fontWeight="bold"
  />
);

const SmallText = (props) => (
  <Text color="gray" {...props} fontWeight="bold" fontSize="10px" />
);

export default Text;
export { H1, H2, H3, H4, H5, SmallText };
