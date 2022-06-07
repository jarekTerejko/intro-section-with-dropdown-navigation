import styled from "styled-components";

export const NavButtonEl = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  margin: 0 .5rem;
  padding: 0.5rem;
  color: var(--color-gray);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--color-dark);
  }

  @media screen and (max-width: 930px) {
    margin: 0 1rem 1.5rem;
  }
`;

export const NavButtonText = styled.span`
  text-transform: capitalize;
  font-family: var(--font-family-sans);
  font-size: 1.6rem;
  margin-right: .4rem;
  padding: 0 .4rem ;
`;
