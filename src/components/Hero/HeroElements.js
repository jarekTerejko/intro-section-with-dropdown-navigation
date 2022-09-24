import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroWrapper = styled.header`
  padding-top: 4.2rem;
  padding-bottom: 11.75rem;

  @media screen and (max-width: 930px) {
    margin-top: 7rem;
  }

  @media screen and (max-width: 375px) {
    padding-top: 0.5rem;
    padding-bottom: 9rem;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1290px) {
    column-gap: 30px;
  }

  @media screen and (max-width: 930px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroContentColLeft = styled.div`
  padding-top: 10.7rem;

  @media screen and (max-width: 930px) {
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 375px) {
    padding-top: 5.2rem;
  }
`;

export const HeroContentColRight = styled.div`
  @media screen and (max-width: 375px) {
    width: calc(100% + 40px);
    transform: translateX(-20px);
    overflow: hidden;
  }
`;

export const HeroHeading = styled.h1`
  font-size: 8.6rem;
  margin-bottom: 5rem;
  color: var(--color-dark);
  letter-spacing: -6px;
  line-height: 0.91;
  word-spacing: 8px;

  @media screen and (max-width: 1300px) {
    font-size: 6.4rem;
  }

  @media screen and (max-width: 520px) {
    font-size: 4.4rem;
    letter-spacing: -2px;
  }
  @media screen and (max-width: 375px) {
    font-size: 3.6rem;
    margin-bottom: 20px;
  }
`;

export const HeroHeadingWord = styled.span`
  display: block;

  @media screen and (max-width: 520px) {
    display: inline;
  }
`;

export const HeroText = styled.p`
  font-size: 2rem;
  max-width: 48rem;
  line-height: 1.4;
  margin-bottom: 4.9rem;
  letter-spacing: -1px;

  @media screen and (max-width: 375px) {
    font-size: 1.8rem;
    margin-bottom: 2.7rem;
  }
`;

export const HeroBtn = styled(Link)`
  background: var(--color-dark);
  color: var(--color-white);
  padding: 1.8rem 3rem;
  border-radius: 1.5rem;
  border: 2px solid var(--color-dark);
  transition: var(--transition);
  margin-bottom: 10.8rem;

  &:hover {
    background: var(--color-white);
    color: var(--color-dark);
  }
  @media screen and (max-width: 375px) {
    padding: 14px 23px;
    font-size: 16px;
    margin-bottom: 4.6rem;
  }
`;

export const HeroClientsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8rem;
  list-style: none;

  @media screen and (max-width: 1290px) {
    padding-right: 0;
  }

  @media screen and (max-width: 930px) {
    width: 100%;
    justify-content: center;
  }
`;

export const HeroClientsListItem = styled.li`
  @media screen and (max-width: 930px) {
    margin: 0 1rem;
  }

  @media screen and (max-width: 375px) {
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
export const HeroClientsListLink = styled.a``;
