import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  padding: 3rem 4rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 144rem;
`;

export const LinkR = styled(Link)`
  display: flex;
`;

export const NavsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin-left: ${(props) => (props.primary ? "4rem" : "")};
  align-items: center;
`;

export const NavSecondary = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
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
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  display: none;

  &.navSectionOne {
    right: 20px;
    width: 15rem;
    &.visible {
      display: block;
    }
  }

  &.navSectionTwo {
    left: 20px;
    width: 12rem;
    &.visible {
      display: block;
    }
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
  border-radius: ${(props) => (props.$border ? "2rem" : "")};
  padding: ${(props) => (props.$border ? "1rem 2.5rem" : "")};

  &:hover {
    color: var(--color-dark);
    border: ${(props) => (props.$border ? "2px solid var(--color-dark)" : "")};
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
    transform: translateX(6px);
    display: flex;
  }
`;
