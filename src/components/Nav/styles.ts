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
    padding-top: 10px;
    &:hover {
      cursor: pointer;
    }

    h1 {
      font-family: "Montserrat";
      color: var(--brandcolor-primary-default);
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;
