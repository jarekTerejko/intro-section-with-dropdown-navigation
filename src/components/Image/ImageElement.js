import styled from "styled-components";

export const ImageEl = styled.img`
  display: block;
  max-width: 100%;

  &.deskto-img {
    transform: translateX(110px);
    max-width: 48rem;

    @media screen and (max-width: 1290px) {
      transform: translateX(0);
      margin-left: auto;
    }

    @media screen and (max-width: 930px) {
      margin: 0 auto;
    }
    @media screen and (max-width: 520px) {
      max-width: 100%;
    }
    @media screen and (max-width: 375px) {
      display: none;
    }
  }

  &.mobile-img {
    display: none;

    @media screen and (max-width: 375px) {
      display: block;
    }
  }
`;
