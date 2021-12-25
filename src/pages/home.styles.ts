import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.main`
  max-width: 1140px;
  margin: 2rem auto;
  max-height: auto;

  .searchBoxWrapp {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 3.375rem;
    margin: 4rem 0;

    input {
      padding: 1rem, 1rem 1rem 3.5rem;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1rem;
      color: var(--textcolor-primary);

      ::-webkit-input-placeholder {
        color: var(--textcolor-primary);
        padding: 2.5rem;
      }

      width: 100%;
      height: 100%;
      margin: 2rem 0;

      outline: 0;
      background: transparent;
      border-width: 0 0 2.5px;
      border-color: var(--outline-gray-dark);

      &:hover {
        border-color: var(--border-color-hover);
      }
    }
  }

  .listWrapp {
    background: var(--bg-white);
    padding: 2.5rem;
    height: 9.5rem;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 6px rgba(48, 46, 69, 00.2);
    margin-bottom: 2rem;

    .itemWrapp {
      display: flex;
      width: 1076px;
      height: 3.125rem;

      .itemInfoWrapp {
        width: 51.5rem;
        height: 3.75rem;

        .itemInfo {
          .titleWrapp {
            display: flex;
            gap: 1rem;
            .optionsWrapp {
              display: flex;
              gap: 1rem;

              .delete-btn,
              .edit-btn {
                background-color: transparent;
                border: none;
                padding-bottom: 0.7rem;
              }

              svg {
                color: var(--brandcolor-primary-default);
              }
            }

            h1 {
              font-weight: 700;
              font-size: 1.5em;
              color: var(--textcolor-primary);
              margin-bottom: 1rem;
            }
          }
          p {
            font-weight: 400;
            font-size: 0.8rem;
            color: var(--textcolor-secondary);
          }
        }
      }
    }

    .buttonWrapp {
      margin-left: -2rem;
      button {
        font-size: 12px;
        line-height: 12px;
        width: 113px;
        height: 28px;
        background: none;
        border: 1px solid var(--brandcolor-primary-light);
        border-radius: 71px;
        padding: 8px 24px;
        margin-left: 1rem;
        &:hover {
          border: 1px solid ${darken(0.2, "#8E85FF")};
        }
      }
    }
  }
`;
