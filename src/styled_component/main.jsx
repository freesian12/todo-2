import styled from "styled-components";

export const CompleCotent = styled.div`
  position: absolute;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

export const PlanContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

export const Banner = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  & img {
    margin-top: 7%;
    margin-bottom: 7%;
    width: 20%;
  }
`;

export const Icon = styled.div`
  margin-top: 7%;
  margin-bottom: 7%;
  width: 15%;
  & img {
    width: 60%;
  }
`;

export const ImgInIcon = styled.image`
  width: 7%;
`;

export const CompleteList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const List = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: block;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 10px 0 10px 0;
  position: relative;
`;

export const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: block;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 10px 0 10px 0;
  position: relative;
`;

export const InnerContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: inline-block;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const TodoList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const TodoListCompleted = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
