import knightCupLogo from "../assets/knightCupTitle.png";
import { ImageBox } from "./styles/ImageBox";
import { useLocation } from "react-router-dom";

const ImageContainer = () => {
  let location = useLocation().pathname;

  return (
    <ImageBox location={location}>
      <div className="headerWrapper">
        <img src={knightCupLogo} alt="knightCupIcon" />
      </div>
      <div className="textWrapper">
        {location == "/Personal" && (
          <blockquote className="personal">
            <p>“When you see a good move, look for a better one.”</p>
            <span>-Emanuel Lasker</span>
          </blockquote>
        )}
        {location == "/Experience" && (
          <blockquote className="experience">
            <p>
              “Many have become chess masters; <br /> no one has become the
              master of chess.”
            </p>
            <span>- Siegbert Tarrasch</span>
          </blockquote>
        )}
      </div>
    </ImageBox>
  );
};

export default ImageContainer;
