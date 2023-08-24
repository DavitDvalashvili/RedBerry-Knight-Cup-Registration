import ImageContainer from "../components/ImageContainer";
import Main from "../components/styles/Main";
import rocket from "../assets/Rocket.png";

const Completed = () => {
  return (
    <Main>
      <ImageContainer />
      <div className="completed">
        <img src={rocket} alt="rocket" />
        <p>Onboarding completed!</p>
      </div>
    </Main>
  );
};

export default Completed;
