import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Nunito;
  .home {
    background-color: #fd5334;
    padding: 265px 0px 0px 85px;
    height: 1080px;
    width: 997px;
    .textWrapper {
      color: #fff;
      font-size: 80px;
      font-weight: 800;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      gap: 16px;
      div {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 26px;
        span {
          color: #212529;
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
    a {
      text-decoration: none;
      button {
        margin-top: 102px;
        padding: 13px 24px;
        border: none;
        border-radius: 8px;
        background-color: #212529;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        border: 4px solid #fd5334;
        text-decoration: none;
        cursor: pointer;
        span {
          color: #fff;
          font-family: Open Sans;
          font-size: 20px;
          font-weight: 400;
          text-transform: capitalize;
        }
        :hover {
          border: 4px solid rgba(194, 165, 249, 0.8);
        }
      }
    }
  }
  .completed {
    height: 1080px;
    width: 997px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      margin-bottom: 16px;
    }
    p {
      color: #000;
      font-size: 36px;
      font-weight: 800;
      line-height: 150%;
    }
  }
`;

export default Main;
