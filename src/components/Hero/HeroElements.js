import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroWrapper = styled.header`
  padding-top: 4.5rem;
  padding-bottom: 11.6rem;
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const HeroContentColLeft = styled.div`
  padding-top: 11rem;
`;

export const HeroContentColRight = styled.div``;

export const HeroHeading = styled.h1`
  font-size: 8.6rem;
  margin-bottom: 4rem;
  color: var(--color-dark);
  letter-spacing: -2px;
`;

export const HeroText = styled.p`
  font-size: 2rem;
  max-width: 48rem;
  line-height: 1.6;
  margin-bottom: 4rem;
`;

export const HeroBtn = styled(Link)`
  background: var(--color-dark);
  color: var(--color-white);
  padding: 1.7rem 2.7rem;
  border-radius: 1.5rem;
  border: 2px solid var(--color-dark);
  transition: var(--transition);
  margin-bottom: 10rem;

  &:hover {
    background: var(--color-white);
    color: var(--color-dark);
  }
`;

export const HeroClientsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8rem;
  list-style: none;
`;

export const HeroClientsListItem = styled.li``;
export const HeroClientsListLink = styled.a``;
