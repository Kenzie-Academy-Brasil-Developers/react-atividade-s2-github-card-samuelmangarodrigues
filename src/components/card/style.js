import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  button {
    margin: 0 0 10px 0;
    color: black;
  }
`;
export const List = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 15px;
  border: 1px solid white;
  border-radius: 6px;
  h1 {
    display: flex;
    align-items: center;
    margin: 0;
  }
  img {
    width: 60px;
    height: 60px;
  }

  div {
    display: flex;
    flex-direction: column;
    span {
      color: gray;
      font-size: 18px;
    }
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 30px;
  }
`;
