import styled from "styled-components";

export const Contents = styled.div`
  background: #181818;
  width: 100%;
  height: 100vh;
`;

export const Vscontent = styled.div`
  display: flex;
  justify-content: center;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  height: 90vh;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  background-color: black;
  z-index: 2;
  padding: 10px 0px;
  margin-bottom: 30px;
  color: white;
  font-size: 2rem;
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
