import { PersonalInputs } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { PersonalFormStyle } from "./styles/PersonalFormStyle";
import arrow from "../assets/arrow-right-circle.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import checkCircle from "../assets/ok.png";
import { ErrorContainer } from "./ErrorContainer";
import { ButttonWrapper } from "./styles/PersonalFormStyle";

const PersonalForm = () => {
  const [nameError, setNameError] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<boolean>(true);
  const [numberError, setNumberError] = useState<boolean>(true);
  const [dateError, setDateError] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PersonalInputs>();

  const [checkSubmition, setCheckSubmition] = useState(false);

  const handleClick = () => {
    setCheckSubmition(true);
    setNameError(true);
    setDateError(true);
    setEmailError(true);
    setNumberError(true);
  };

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<PersonalInputs> = () => {
    navigate("/Experience");
  };

  const [focused, setFocused] = useState<boolean>(false);

  return (
    <PersonalFormStyle onSubmit={handleSubmit(onSubmit)}>
      <div className={!errors.name ? "inputWrapper" : "inputWrapper error"}>
        {!watch("name") && (
          <p>
            Name <span>*</span>
          </p>
        )}
        <input
          {...register("name", {
            required: "Please enter valid name",
            minLength: 2,
            maxLength: 50,
          })}
        />
        {!errors.name && watch("name") && checkSubmition && (
          <img src={checkCircle} alt="checkCircle" />
        )}
      </div>

      <div className={!errors.email ? "inputWrapper" : "inputWrapper error"}>
        {!watch("email") && (
          <p>
            Email address <span>*</span>
          </p>
        )}
        <input
          {...register("email", {
            required: "Please enter valid email address",
            minLength: 5,
            pattern: {
              value: /^[\w.%+-]+@redberry\.ge$/,
              message: "Please enter valid email address",
            },
          })}
        />
        {!errors.email && watch("email") && checkSubmition && (
          <img src={checkCircle} alt="checkCircle" />
        )}
      </div>

      <div
        className={!errors.phoneNumber ? "inputWrapper" : "inputWrapper error"}
      >
        {!watch("phoneNumber") && (
          <p>
            Phone number <span>*</span>
          </p>
        )}
        <input
          {...register("phoneNumber", {
            required: "Please enter valid phone number",
            minLength: 9,
            maxLength: 9,
            pattern: {
              value: /5[0-9]{8}/,
              message: "Please enter valid phone number",
            },
          })}
        />
        {!errors.phoneNumber && watch("phoneNumber") && checkSubmition && (
          <img src={checkCircle} alt="checkCircle" />
        )}
      </div>

      <div
        className={
          !errors.dateOfBirth
            ? "inputWrapper dateWrapper"
            : "inputWrapper dateWrapper error"
        }
      >
        {!focused && !watch("dateOfBirth") && (
          <p>
            Date of birth <span>*</span>
          </p>
        )}
        <input
          className={!focused && !watch("dateOfBirth") ? "hideDate" : ""}
          type="date"
          {...register("dateOfBirth", {
            required: "Please enter valid date",
          })}
          onBlur={() => {
            setFocused(false);
          }}
          onFocus={() => {
            setFocused(true);
          }}
        />
        {!errors.dateOfBirth && watch("dateOfBirth") && checkSubmition && (
          <img src={checkCircle} alt="checkCircle" />
        )}
      </div>

      <ButttonWrapper>
        <Link to="/">
          <button className="back">Back</button>
        </Link>
        <button className="next" onClick={handleClick}>
          <span>next</span>
          <img src={arrow} alt="arrowImage" />
        </button>
      </ButttonWrapper>

      <ErrorContainer
        errors={errors}
        nameError={nameError}
        setNameError={setNameError}
        emailError={emailError}
        setEmailError={setEmailError}
        numberError={numberError}
        setNumberError={setNumberError}
        dateError={dateError}
        setDateError={setDateError}
      />
    </PersonalFormStyle>
  );
};

export default PersonalForm;
