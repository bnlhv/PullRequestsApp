import styled from "styled-components";

export const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      svg {
        color: #cda5f3;
        font-size: 6rem;
      }
      span {
        font-size: 2rem;
        color: #cda5f3;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    align-self: auto;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

export const ListItem = styled.li`
    padding: 0.6rem 1rem;
    border-radius: 0.6rem;
    &:hover {
    background-color: #cda5f3;
    a {
        color: black;
    }
    }
    a {
    text-decoration: none;
    display: flex;
    gap: 2rem;
    color: white;
    font-size: 1.5rem;
    }
`;

export const Links = styled.div`
    display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .active {
          background-color: #cda5f3;
          a {
            color: black;
          }
        }
    }
`;