import TextBox from "./styles/TextBox";

const TextContainer = () => {
  return (
    <TextBox>
      <header>Start creating your account</header>
      <div className="navigation">
        <div className="number">
          <div className="1">1</div>
          <div className="divider"></div>
          <div className="2">2</div>
        </div>
        <div className="name">
          <p>Personal information</p>
          <p>Chess experience</p>
        </div>
      </div>
    </TextBox>
  );
};

export default TextContainer;
