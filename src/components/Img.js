import styled, { css } from "styled-components";
import { layout, space } from "styled-system";
import "./datepicker.css";
const Img = styled.img`
  ${space}
  ${layout}
  ${(props) =>
    props.fill &&
    css`
      img path {
        fill: props.fill;
      }
    `}
`;

export default Img;
