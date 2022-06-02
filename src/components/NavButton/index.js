import { ImageEl } from "../Image/ImageElement";
import { NavButtonText, NavButtonEl } from "./NavButtonElements"
import ArrowDown from "../../images/icon-arrow-down.svg";
import ArrowUp from "../../images/icon-arrow-up.svg";

const NavButton = ({ text, handleNavClick, isOpenNavSection }) => {
  return (
    <NavButtonEl onClick={handleNavClick}>
      <NavButtonText>{text}</NavButtonText>
      <ImageEl src={isOpenNavSection ? ArrowUp : ArrowDown} alt="" />
    </NavButtonEl>
  );
};
 
export default NavButton;