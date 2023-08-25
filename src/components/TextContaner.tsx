import TextBox from "./styles/TextBox";
import PersonalForm from "./PersonalForm";
import ExperienceForm from "./ExperienceForm";
import { useLocation } from "react-router-dom";

const TextContainer = () => {
  let location = useLocation().pathname;
  return (
    <TextBox>
      {location == "/Personal" && <header>Start creating your account</header>}
      {location == "/Experience" && (
        <header>First step is done, continue to finish onboarding</header>
      )}

      <div className="navigation">
        <div className="number">
          <div className="personal">1</div>
          <div className="divider"></div>
          <div className="experience">2</div>
        </div>
        <div className="name">
          <p>Personal information</p>
          <p>Chess experience</p>
        </div>
      </div>
      {location == "/Personal" ? (
        <h1>Personal information</h1>
      ) : (
        <h1>Chess experience</h1>
      )}
      <h4>This is basic informaton fields</h4>
      {location == "/Personal" && <PersonalForm></PersonalForm>}
      {location == "/Experience" && <ExperienceForm></ExperienceForm>}
    </TextBox>
  );
};

export default TextContainer;
