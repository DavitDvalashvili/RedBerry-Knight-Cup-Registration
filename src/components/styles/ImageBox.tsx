import styled from "styled-components";
import { imageBoxType } from "../../types";
import startImage from "../../assets/starting.png";
import personalImage from "../../assets/second.png";
import experienceImage from "../../assets/third.png";
import CompletedImage from "../../assets/complete.png";

export const ImageBox = styled.div<imageBoxType>`
  width: 923px;
  .headerWrapper {
    height: 84px;
  }
  .textWrapper {
    height: 996px;
    width: 923px;
    background-position: bottom;
    background-size: auto;
    background-image: ${(props) =>
      props.location == "/"
        ? `url(${startImage})`
        : props.location == "/Personal"
        ? `url(${personalImage})`
        : props.location == "/Experience"
        ? `url(${experienceImage})`
        : props.location == "/Completed"
        ? `url(${CompletedImage})`
        : ""};
  }
  .textWrapper {
    font-family: Nunito;
    font-style: italic;
    text-transform: uppercase;
    p {
      color: #212529;
      font-size: 26px;
      font-weight: 800;
    }
    span {
      color: #e5e6e8;
      font-size: 24px;
      font-weight: 500;
    }
    .personal {
      padding: 211px 0px 0px 132px;
      p {
        width: 423px;
        margin-bottom: 24px;
      }
    }
    .experience {
      padding: 177px 0px 0px 117px;
      width: 732px;
      p {
        margin-bottom: 32px;
      }
      span {
        color: #093f68;
        display: block;
        text-align: right;
      }
    }
  }
`;
