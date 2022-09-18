import styled from "styled-components";

export const Nav = styled.nav`
  display: flexbox;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  h1 {
    span {
      margin-left: 0.5rem;
      color: #cda5f3;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;