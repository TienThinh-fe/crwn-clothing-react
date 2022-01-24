import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media screen and (max-width: 800px) {
    padding: 12px 0;
  }
`;

export const Title = styled.h2`
  text-align: left;
  margin-bottom: 40px;
  width: 90%;

  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;
