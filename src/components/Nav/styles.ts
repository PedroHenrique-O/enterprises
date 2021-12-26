import styled from "styled-components";

export const Container = styled.main`
  justify-content: center;
  max-width: auto;
  margin: auto;
  //padding: 0 5rem;
  height: 80px;
  background: var(--bg-white);

  header {
    display: flex;
    justify-content: space-between;
    max-width: 1150px;
    width: auto;
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
      margin-left: -2.5rem;
      font-weight: 700;
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        margin-left: 1rem;
      }
      @media screen and (max-width: 1080px) {
        margin-left: 2rem;
      }
    }
  }
`;
