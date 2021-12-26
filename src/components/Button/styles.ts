import { darken } from "polished";
import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: 0;
  background: var(--brandcolor-primary-default);
  border-radius: 71px;
  padding: 10px 40px;
  width: 176px;
  color: var(--bg-white);
  font-weight: 700;
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    line-height: 10px;

    height: 30px;
    margin-right: 2rem;
    font-size: 0.8rem;
  }
  &:hover {
    background-color: ${darken(0.2, "#4F46BB")};
  }

  span {
    margin-left: 0.3rem;
  }
`;
