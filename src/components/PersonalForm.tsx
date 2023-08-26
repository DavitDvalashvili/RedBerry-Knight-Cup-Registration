import { PersonalInputs } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { PersonalFormStyle } from "./styles/PersonalFormStyle";
import arrow from "../assets/arrow-right-circle.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import checkCircle from "../assets/ok.png";
import { ErrorContainer } from "./ErrorContainer";

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

  const onSubmit: SubmitHandler<PersonalInputs> = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    console.log(data);
  };

  let [savedData, setSavedData] = useState<any>("");
  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      setSavedData(JSON.parse(savedUserData));
    }
  }, []);

  const [focused, setFocused] = useState<boolean>(false);
  const handleBlur = () => {
    setFocused(false);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <PersonalFormStyle onSubmit={handleSubmit(onSubmit)}>
      <div
        className={
          !errors.name || savedData ? "inputWrapper" : "inputWrapper error"
        }
      >
        {!watch("name") && !savedData && (
          <p>
            Name <span>*</span>
          </p>
        )}
        <input
          defaultValue={savedData.name}
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

      <div
        className={
          !errors.email || savedData ? "inputWrapper" : "inputWrapper error"
        }
      >
        {!watch("email") && !savedData && (
          <p>
            Email address <span>*</span>
          </p>
        )}
        <input
          value={savedData.email}
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
        className={
          !errors.phoneNumber || savedData
            ? "inputWrapper"
            : "inputWrapper error"
        }
      >
        {!watch("phoneNumber") && !savedData && (
          <p>
            Phone number <span>*</span>
          </p>
        )}
        <input
          value={savedData.phoneNumber}
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
          !errors.dateOfBirth || savedData
            ? "inputWrapper dateWrapper"
            : "inputWrapper dateWrapper error"
        }
      >
        {!focused && !watch("dateOfBirth") && !savedData && (
          <p>
            Date of birth <span>*</span>
          </p>
        )}
        <input
          value={savedData.dateOfBirth}
          className={
            !focused && !watch("dateOfBirth") && !savedData ? "hideDate" : ""
          }
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
