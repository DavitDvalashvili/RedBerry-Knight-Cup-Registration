import { PersonalInputs } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { PersonalFormStyle } from "./styles/PersonalFormStyle";
import arrow from "../assets/arrow-right-circle.png";
import { useState } from "react";

const PersonalForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PersonalInputs>();

  const onSubmit: SubmitHandler<PersonalInputs> = (data) => {
    console.log(data);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    const { value } = e.target;
    if (value.length <= 10) {
      // Restricting input to 10 characters (dd/mm/yyyy)
      if (value.length === 2 || value.length === 5) {
        // Automatically insert "/" at the appropriate positions
        setInputValue(value + "/");
      } else {
        setInputValue(value);
      }
    }
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
      </div>

      <div
        className={
          !errors.dateOfBirth
            ? "inputWrapper dateWrapper"
            : "inputWrapper dateWrapper error"
        }
      >
        {!watch("dateOfBirth") && (
          <p>
            Date of birth <span>*</span>
          </p>
        )}
        <input
          {...register("dateOfBirth", {
            required: "Please enter valid date",
            pattern: {
              value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
              message: "Please enter valid date",
            },
          })}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      <div className="buttonWrapper">
        <button>Back</button>
        <button>
          <span>next</span>
          <img src={arrow} alt="arrowImage" />
        </button>
      </div>
    </PersonalFormStyle>
  );
};

export default PersonalForm;
