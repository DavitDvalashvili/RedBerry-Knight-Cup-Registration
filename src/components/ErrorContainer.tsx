import { errorType } from "../types";
import errorMark from "../assets/Mark.png";
import close from "../assets/close.png";
import styled from "styled-components";

export const ErrorContainer = ({
  errors,
  nameError,
  setNameError,
  emailError,
  setDateError,
  numberError,
  setNumberError,
  dateError,
  setEmailError,
}: errorType) => {
  return (
    <ErrorBox>
      {errors.name && nameError && (
        <div className="error">
          <div>
            <img src={errorMark} alt="errorMark" />
            <span>Invalid Name</span>
            <img
              className="cancel"
              src={close}
              alt="close"
              onClick={() => {
                setNameError(false);
              }}
            />
          </div>
          <p>Please enter valid Name</p>
        </div>
      )}
      {errors.email && emailError && (
        <div className="error">
          <div>
            <img src={errorMark} alt="errorMark" />
            <span>Invalid Email Address</span>
            <img
              className="cancel"
              src={close}
              alt="close"
              onClick={() => {
                setEmailError(false);
              }}
            />
          </div>
          <p>Please enter valid Email Address</p>
        </div>
      )}
      {errors.phoneNumber && numberError && (
        <div className="error">
          <div>
            <img src={errorMark} alt="errorMark" />
            <span>Invalid Phone Number</span>
            <img
              className="cancel"
              src={close}
              alt="close"
              onClick={() => {
                setNumberError(false);
              }}
            />
          </div>
          <p>Please enter valid Phone Number</p>
        </div>
      )}
      {errors.dateOfBirth && dateError && (
        <div className="error">
          <div>
            <img src={errorMark} alt="errorMark" />
            <span>Invalid Date of Birth</span>
            <img
              className="cancel"
              src={close}
              alt="close"
              onClick={() => {
                setDateError(false);
              }}
            />
          </div>
          <p>Please enter valid Date of Birth</p>
        </div>
      )}
    </ErrorBox>
  );
};

const ErrorBox = styled.div`
  position: absolute;
  top: -255px;
  right: -135px;
  z-index: 100;
  .error {
    background-color: #fff;
    margin-bottom: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px 0px;
    border-radius: 4px;
    font-family: Open Sans;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      padding: 8px 6px 8px 12px;
      color: #dc3545;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.13);
      span {
        width: 272px;
      }
      .cancel {
        cursor: pointer;
      }
    }
    p {
      padding: 12px;
      color: #212529;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    }
  }
`;
