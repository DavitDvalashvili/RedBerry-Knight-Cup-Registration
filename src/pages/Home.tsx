import ImageContainer from "../components/ImageContainer";
import Main from "../components/styles/Main";
import arrow from "../assets/arrow-right-circle.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Main>
      <ImageContainer />
      <div className="home">
        <div className="textWrapper">
          <div>
            <p>chess says</p>
            <span>a lot about</span>
          </div>
          <p>who we are</p>
        </div>
        <Link to="/Personal">
          <button>
            <span>Get started</span>
            <img src={arrow} alt="arrow" />
          </button>
        </Link>
      </div>
    </Main>
  );
};

export default Home;
