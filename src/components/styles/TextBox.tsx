import styled from "styled-components";

const TextBox = styled.div`
  height: 1080px;
  width: 997px;
  header {
    padding: 30px 48px;
    color: #212529;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    text-transform: capitalize;
    border-bottom: 1px solid rgba(185, 180, 195, 0.3);
  }
  .navigation {
    margin: 60px 174px 112px 48px;
    font-family: Open Sans;
    .number {
      display: flex;
      justify-content: left;
      align-items: center;
      padding: 0px 45px 0px 59px;
      gap: 4px;
      margin-bottom: 4px;
      .personal,
      .experience {
        display: flex;
        width: 40px;
        padding: 8px 15px 7px 14px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid #e5e6e8;
        background: #fff;
        color: #212529;
        font-size: 18px;
        font-weight: 700;
      }
      .experience {
        background-color: #f5f5f5;
      }
      .divider {
        width: 174px;
        height: 1px;
        background: rgba(185, 180, 195, 0.3);
      }
    }
    .name {
      display: flex;
      justify-content: fle;
      gap: 77px;
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    }
  }
  h1,
  h4 {
    margin-left: 48px;
    font-family: Open Sans;
    font-weight: 600;
    line-height: 150%;
  }
  h1 {
    color: #000;
    font-size: 32px;
  }
  h4 {
    color: #95939a;
    font-size: 14px;
    text-transform: capitalize;
    margin-top: 3px;
  }
`;

export default TextBox;
