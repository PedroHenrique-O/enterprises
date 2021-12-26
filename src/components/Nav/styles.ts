import styled from "styled-components";

export const Container = styled.main`
  justify-content: center;
  max-width: auto;
  margin: auto;
  padding: 10px;
  height: 80px;
  background: var(--bg-white);

  header {
    display: flex;
    justify-content: space-between;
    width: 1140px;
    margin: auto;
    align-items: center;
    padding-top: 10px;
    @media screen and (max-width: 768px) {
      max-width: 100vw;
    }
    &:hover {
      cursor: pointer;
    }

    h1 {
      font-family: "Montserrat";
      color: var(--brandcolor-primary-default);
      font-size: 2rem;
      font-weight: 700;
      @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        margin-left: 1rem;
      }
    }
  }
`;
