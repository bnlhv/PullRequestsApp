import styled from "styled-components"

export const Section = styled.section`
margin-left: 18vw;
padding: 2rem;
height: 100%;
@media screen and (min-width: 280px) and (max-width: 1080px) {
  margin-left: 0;
  grid-template-columns: 1fr;
}
`;

export const DivRow1 = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    height: 50%;
    gap: 1rem;
`;

export const DivRow2 = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    height: 50%;
`;

export const Grid = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
`;