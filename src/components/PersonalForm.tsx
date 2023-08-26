import { PersonalInputs } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { PersonalFormStyle } from "./styles/PersonalFormStyle";
import arrow from "../assets/arrow-right-circle.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import checkCircle from "../assets/ok.png";

const PersonalForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const [checkSubmition, setCheckSubmition] = useState(false);
  const handleClick = () => {
    setCheckSubmition(true);
  };

  const onSubmit: SubmitHandler<PersonalInputs> = (data) => {
    console.log(data);
  };

  const [focused, setFocused] = useState<boolean>(false);
  const handleBlur = () => {
    setFocused(false);
  };
  const handleFocus = () => {
    setFocused(true);
  };

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
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {!errors.dateOfBirth && watch("dateOfBirth") && checkSubmition && (
          <img src={checkCircle} alt="checkCircle" />
        )}
      </div>

      <div className="buttonWrapper">
        <Link to="/">
          <button className="back">Back</button>
        </Link>
        <button className="next" onClick={handleClick}>
          <span>next</span>
          <img src={arrow} alt="arrowImage" />
        </button>
      </div>
    </PersonalFormStyle>
  );
};

export default PersonalForm;
