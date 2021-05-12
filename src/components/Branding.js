import Img from "./Img";

const Branding = (props) => (
  <Img
    src={
      props.white
        ? "https://www.pngkey.com/png/full/60-606021_airbnb-logo-png.png"
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
    }
    height={props.size}
    alt={props.alt}
  />
);

export default Branding;
