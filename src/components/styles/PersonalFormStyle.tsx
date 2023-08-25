import styled from "styled-components";

export const PersonalFormStyle = styled.form`
  margin: 84px 174px 154px 48px;
  position: relative;
  .inputWrapper {
    width: 775px;
    height: 46px;
    margin-bottom: 40px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.13);
    padding: 8px 16px;
    position: relative;
    p {
      color: #212529;
      font-family: Open Sans;
      font-size: 20px;
      font-weight: 400;
      line-height: 150%;
      span {
        color: #dc3545;
        font-size: 16px;
      }
    }
    input {
      position: absolute;
      top: 8px;
      left: 16px;
      background-color: transparent;
      border: none;
      height: 30px;
      width: 689px;
      color: #212529;
      font-family: Open Sans;
      font-size: 20px;
      font-weight: 400;
      line-height: 150%;
      :focus {
        outline: none;
      }
    }
  }
  .error {
    background-color: rgba(220, 53, 69, 0.13);
    p {
      color: rgb(220, 53, 69);
    }
    input {
      color: rgb(220, 53, 69);
    }
  }
`;
