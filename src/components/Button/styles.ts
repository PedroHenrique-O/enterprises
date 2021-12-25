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
  &:hover {
    background-color: ${darken(0.2, "#4F46BB")};
  }
`;
