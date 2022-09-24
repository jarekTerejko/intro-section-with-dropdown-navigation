import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 144rem;
  position: relative;

  @media screen and (max-width: 930px) {
    padding: 2rem 1.5rem;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: var(--color-white);
  }
`;

export const NavbarOverlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  transition: opacity var(--transition);
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.68);
  z-index: 1;
`;

export const LinkR = styled(Link)`
  display: flex;
`;

export const NavsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  transition: transform var(--transition);

  @media screen and (max-width: 930px) {
    transform: ${(props) =>
      props.isOpen ? `translateX(0)` : "translateX(100%)"};
    background: #fff;
    display: block;
    position: fixed;
    right: 0;
    top: 0;
    width: 64%;
    z-index: 1;
    min-height: 100vh;
    padding: 7.8rem 2.1rem 0 0.5rem;
  }
`;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin-left: ${(props) => (props.primary ? "5.4rem" : "")};
  padding-top: ${(props) => (props.secondary ? ".4rem" : "")};
  align-items: center;

  @media screen and (max-width: 930px) {
    display: block;
    margin-left: ${(props) => (props.primary ? "0" : "")};
  }
`;

export const NavSectionWrapper = styled.li`
  position: relative;
`;

export const NavSectionList = styled.ul`
  background: #fff;
  padding: 1.5rem;
  border-radius: 2rem;
  position: absolute;
  top: 40px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  display: none;

  &.navSectionOne {
    right: 10px;
    width: 15rem;
    &.visible {
      display: block;
      @media screen and (max-width: 930px) {
        width: 100%;
      }
    }
  }

  &.navSectionTwo {
    left: 16px;
    width: 12rem;
    &.visible {
      display: block;
      @media screen and (max-width: 930px) {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 930px) {
    position: static;
    box-shadow: none;
    padding: 0 0 0.9rem 3.8rem;
    padding-top: 0.2rem;
  }
`;

export const NavSectionItem = styled.li`
  margin: 0.5rem 0;
`;

export const NavSectionLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  text-decoration: none;
  color: var(--color-gray);
  font-size: 1.6rem;
  transition: var(--transition);
  border: ${(props) => (props.$border ? "2px solid var(--color-gray)" : "")};
  border-radius: ${(props) => (props.$border ? "1.5rem" : "")};
  padding: ${(props) => (props.$border ? "1rem 2rem" : "")};

  &:hover {
    color: var(--color-dark);
    border: ${(props) => (props.$border ? "2px solid var(--color-dark)" : "")};
  }

  @media screen and (max-width: 930px) {
    margin: 0 0 1.5rem 0;
    display: ${(props) => (props.$mobileBlock ? "block" : "")};
    display: ${(props) => (props.$mobileBlock ? "flex" : "")};
    align-items: ${(props) => (props.$mobileBlock ? "center" : "")};
    justify-content: ${(props) => (props.$mobileBlock ? "center" : "")};
    margin: ${(props) => (props.$mobileBlock ? "0" : "")};
    border: ${(props) =>
      props.$borderTransparent ? "2px solid transparent" : ""};
    padding: ${(props) => (props.$borderTransparent ? "1rem 2rem;" : "")};
  }
`;

export const NavSectionLinkText = styled.span`
  margin-left: 1rem;
`;

export const NavMenuBtn = styled.button`
  background: none;
  border: none;
  width: 4rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 930px) {
    transform: translateX(4px);
    display: flex;
    position: relative;
    z-index: 2;
  }
`;
