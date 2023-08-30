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
    display: flex;
    justify-content: right;
    align-items: center;
    p {
      color: #212529;
      font-family: Open Sans;
      font-size: 20px;
      font-weight: 400;
      line-height: 150%;
      width: 200px;
      margin-right: 560px;
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
      color: #212529;
      font-family: Open Sans;
      font-size: 20px;
      font-weight: 400;
      line-height: 150%;
      :focus {
        outline: none;
      }
    }
    .hideDate {
      ::-webkit-datetime-edit-month-field,
      ::-webkit-datetime-edit-day-field,
      ::-webkit-datetime-edit-year-field,
      ::-webkit-datetime-edit-text {
        color: transparent;
      }
      ::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
      }
    }
    :hover {
      color: rgba(33, 37, 41, 0.5);
      background-color: rgba(33, 37, 41, 0.13);
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

export const ButttonWrapper = styled.div`
  margin-top: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 400;
    text-transform: capitalize;
    padding: 13px 24px;
    border-radius: 8px;
    border: 1px solid #212529;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .next {
    background-color: #212529;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    gap: 12px;
    border: 4px solid #fff;
    :hover {
      border-color: rgba(194, 165, 249, 0.8);
    }
  }
  .back {
    :hover {
      border-color: rgba(194, 165, 249, 0.8);
      background: rgba(185, 180, 195, 0.3);
    }
  }
`;
