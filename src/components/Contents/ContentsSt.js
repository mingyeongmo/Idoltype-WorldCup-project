import styled from "styled-components";

export const Vscontent = styled.div`
  display: flex;
  justify-content: center;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  height: 100vh;

  border: 1px solid;
`;

export const Title = styled.h1`
  position: absolute;
  background-color: wheat;
  z-index: 2;
  padding: 0px 20px;
  padding-bottom: 8px;
`;

export const Fight1 = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  min-width: 400px;
  overflow: hidden;
  position: relative;
  /* bottom:0px; */
`;

export const Img = styled.img`
  width: 100vh;
  height: 100vh;
  transition: 0.5s;
  cursor: pointer;
  position: absolute;
  bottom: 10px;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

export const Name = styled.div`
  position: absolute;
  z-index: 3;
  color: white;
  bottom: 10%;
  font-size: 80px;
`;
