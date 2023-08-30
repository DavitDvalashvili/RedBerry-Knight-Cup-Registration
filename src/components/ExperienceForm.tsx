import ExperienceFormStyle from "./styles/ExperienceFormStyle";
import { useForm, SubmitHandler } from "react-hook-form";
import { ExperienceInputs } from "../types";
import { ButttonWrapper } from "./styles/PersonalFormStyle";
import { Link, useNavigate } from "react-router-dom";

const ExperienceForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ExperienceInputs> = (data) => {
    console.log(data);
    console.log(errors);
    navigate("/Completed");
  };

  return (
    <ExperienceFormStyle onSubmit={handleSubmit(onSubmit)}>
      <div className="selectInputBox">
        <div id="experience">
          <select
            {...register("experience", {
              required: "Please choose you experience",
            })}
          >
            {!watch("experience") && (
              <option value="">Level of knowledge *</option>
            )}
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
        <div id="grandMasters">
          <select
            {...register("Grandmasters", {
              required: "Please choose Grandmaster",
            })}
          >
            {!watch("Grandmasters") && (
              <option value="">Choose your character *</option>
            )}
            <option value="Magnus Carlsen">Magnus Carlsen</option>
            <option value="Wilhelm Steinitz">Wilhelm Steinitz</option>
            <option value="Nona Giunashvili">Nona Giunashvili</option>
            <option value="Bobby Fischer">Bobby Fischer</option>
          </select>
        </div>
      </div>
      <div className="radioInputBox">
        <p>
          Have you participated in the Redberry Championship? <span>*</span>
        </p>
        <div className="radioInputs">
          <label>
            <input
              type="radio"
              value="yes"
              {...register("participatiuon", { required: "chech smthn" })}
            />
            <span>Yes</span>
          </label>
          <label>
            <input
              type="radio"
              value="no"
              {...register("participatiuon", { required: "chech smthn" })}
            />
            <span>No</span>
          </label>
        </div>
      </div>
      <ButttonWrapper>
        <Link to="/Personal">
          <button className="back">Back</button>
        </Link>
        <button className="next">
          <span>Done</span>
        </button>
      </ButttonWrapper>
    </ExperienceFormStyle>
  );
};

export default ExperienceForm;
