import styled from "styled-components";

const ExperienceFormStyle = styled.form`
  margin: 103px 152px 154px 38px;
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: #000;
  .selectInputBox {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 23px;
    #experience,
    #grandMasters {
      width: 392px;
      height: 46px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.13);
      select {
        width: 100%;
        height: 100%;
        border: none;
        :focus {
          outline: none;
        }
        font-family: Open Sans;
        font-size: 20px;
        font-weight: 400;
        line-height: 150%;
        cursor: pointer;
      }
    }
  }
  .radioInputBox {
    margin: 88px 185px 174px 0px;
    p {
      span {
        color: #dc3545;
      }
    }
    .radioInputs {
      display: flex;
      gap: 16px;
      label {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        justify-content: left;
        gap: 8px;
        align-items: center;
        cursor: pointer;
        input {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
      }
    }
  }
`;

export default ExperienceFormStyle;
