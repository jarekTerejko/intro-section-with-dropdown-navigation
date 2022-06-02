import { ImageEl } from "../Image/ImageElement";
import NavButton from "../NavButton";
import {
  LinkR,
  NavbarWrapper,
  Nav,
  NavSectionItem,
  NavSectionLink,
  NavSectionLinkText,
  NavSectionList,
  NavSectionWrapper,
  NavsWrapper,
  NavMenuBtn,
} from "./NavbarElements";
import Logo from "../../images/logo.svg";
import TodoImg from "../../images/icon-todo.svg";
import CalendarImg from "../../images/icon-calendar.svg";
import RemindersImg from "../../images/icon-reminders.svg";
import PlanningImg from "../../images/icon-planning.svg";
import X from "../../images/icon-close-menu.svg";
import Bars from "../../images/icon-menu.svg";
import { useState } from "react";

const Navbar = () => {
  const navSections = {
    navSectionOne: [
      { text: "Todo List", img: TodoImg, path: "todo-list" },
      { text: "Calendar", img: CalendarImg, path: "calendar" },
      { text: "Reminders", img: RemindersImg, path: "reminders" },
      { text: "Planning", img: PlanningImg, path: "planning" },
    ],
    navSectionTwo: [
      { text: "History", path: "history" },
      { text: "Our Team", path: "our-team" },
      { text: "Blog", path: "blog" },
    ],
  };

  const [isOpenNavSectionOne, setIsOpenNavSectionOne] = useState(false);
  const [isOpenNavSectionTwo, setIsOpenNavSectionTwo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavSectionOne = () => {
    setIsOpenNavSectionOne(!isOpenNavSectionOne);
  };
  const handleNavSectionTwo = () => {
    setIsOpenNavSectionTwo(!isOpenNavSectionTwo);
  };

  const CloseNavSection = () => {
    if (isOpenNavSectionOne) {
      handleNavSectionOne();
    }
    if (isOpenNavSectionTwo) {
      handleNavSectionTwo();
    }
  };

  return (
    <NavbarWrapper>
      <LinkR to="/" onClick={CloseNavSection}>
        <ImageEl src={Logo} alt="Logo" />
      </LinkR>
      <NavsWrapper>
        <Nav primary>
          <NavSectionWrapper>
            <NavButton
              text="features"
              handleNavClick={handleNavSectionOne}
              isOpenNavSection={isOpenNavSectionOne}
            />
            <NavSectionList
              className={
                isOpenNavSectionOne ? "visible navSectionOne" : "navSectionOne"
              }
            >
              {navSections.navSectionOne.map((item, i) => {
                return (
                  <NavSectionItem key={i}>
                    <NavSectionLink to={item.path} onClick={CloseNavSection}>
                      <ImageEl src={item.img} alt="" />
                      <NavSectionLinkText>{item.text}</NavSectionLinkText>
                    </NavSectionLink>
                  </NavSectionItem>
                );
              })}
            </NavSectionList>
          </NavSectionWrapper>
          <NavSectionWrapper>
            <NavButton
              text="company"
              handleNavClick={handleNavSectionTwo}
              isOpenNavSection={isOpenNavSectionTwo}
            />
            <NavSectionList
              className={
                isOpenNavSectionTwo ? "visible navSectionTwo" : "navSectionTwo"
              }
            >
              {navSections.navSectionTwo.map((item, i) => {
                return (
                  <NavSectionItem key={i}>
                    <NavSectionLink to={item.path} onClick={CloseNavSection}>
                      <NavSectionLinkText style={{ marginLeft: 0 }}>
                        {item.text}
                      </NavSectionLinkText>
                    </NavSectionLink>
                  </NavSectionItem>
                );
              })}
            </NavSectionList>
          </NavSectionWrapper>
          <li style={{ margin: "0 1.5rem" }}>
            <NavSectionLink to="careers" onClick={CloseNavSection}>
              <NavSectionLinkText style={{ marginLeft: 0 }}>
                Careers
              </NavSectionLinkText>
            </NavSectionLink>
          </li>
          <li style={{ margin: "0 1.5rem" }} onClick={CloseNavSection}>
            <NavSectionLink to="about">
              <NavSectionLinkText style={{ marginLeft: 0 }}>
                About
              </NavSectionLinkText>
            </NavSectionLink>
          </li>
        </Nav>
        <Nav>
          <li style={{ margin: "0 1.5rem" }} onClick={CloseNavSection}>
            <NavSectionLink to="login">
              <NavSectionLinkText style={{ marginLeft: 0 }}>
                Login
              </NavSectionLinkText>
            </NavSectionLink>
          </li>
          <li style={{ margin: "0 0 0 1.5rem" }} onClick={CloseNavSection}>
            <NavSectionLink to="register" $border>
              <NavSectionLinkText style={{ marginLeft: 0 }}>
                Register
              </NavSectionLinkText>
            </NavSectionLink>
          </li>
        </Nav>
      </NavsWrapper>
      <NavMenuBtn onClick={handleMenu}>
        <ImageEl
          src={isOpen ? `${X}` : `${Bars}`}
          alt={isOpen ? "Close Menu" : "Open Menu"}
        />
      </NavMenuBtn>
    </NavbarWrapper>
  );
};

export default Navbar;
