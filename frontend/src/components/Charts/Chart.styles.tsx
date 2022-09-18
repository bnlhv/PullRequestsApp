import styled from "styled-components";
import { cardStyle } from "../Utils/ReusableStyles";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyle}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: left;
      gap: 0.5rem;
      margin-left: 2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        inline-size: min-content;
        &:hover {
          background-color: #cda5f3;
          span {
            color: black;
          }
        }
        span {
          color: #cda5f3;
        }
      }
    }
  }
`;

export const Chart = styled.div`
  height: 70%;
  .recharts-default-tooltip {
    background-color: black !important;
    border-color: black !important;
  }
`;
