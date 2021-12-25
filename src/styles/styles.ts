import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: var(--background);
  justify-content: center;
  align-items: center;

  .addWrapp {
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  background: var(--bg-white);
  max-width: 650px;
  margin: 2rem auto;
  height: auto;
  border-radius: 8px;
  padding: 1.2em 1.3rem;
 
    
  input, select {
 
      font-weight: 400;
      font-size: 1rem;
      line-height: 1rem;
      color: var(--textcolor-primary);

      ::-webkit-input-placeholder {
        color: var(--textcolor-primary);
 
      }

      width: 100%;
      padding: 8px 0;
      margin: 1.5rem 0;

      outline: 0;
      background: transparent;
      border-width: 0 0 2.5px;
      border-color: var(--outline-gray-dark);

      &:hover {
        /* border-color: var(--border-color-hover); */
        border-color:  ${darken(0.3, "#bbb8d9")};
      }
    }
  }

  .cepInfo{
    p{
      font-size: 0.875rem;
      line-height: 18px 2px;
      color: var(--textcolor-primary)

    }
  }
 
`;
