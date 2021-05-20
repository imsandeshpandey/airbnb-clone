import styled from "styled-components";
import Box from "./box";

const Overlay = styled(Box)`
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  z-index: -1;
  backdrop-filter: ${(props) =>
    props.backdropFilter ? props.backdropFilter : "none"};
`;

const ClickawayWrapper = (props) => (
  <Overlay width="100vh" height="100vh"></Overlay>
);
export default Overlay;
