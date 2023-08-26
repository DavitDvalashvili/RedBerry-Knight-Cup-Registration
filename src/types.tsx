export interface imageBoxType {
  location: string;
}

export interface PersonalInputs {
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
}

import { FieldErrors } from "react-hook-form";

export interface errorType {
  errors: FieldErrors<PersonalInputs>;
  nameError: boolean;
  setNameError: React.Dispatch<React.SetStateAction<boolean>>;
  emailError: boolean;
  setEmailError: React.Dispatch<React.SetStateAction<boolean>>;
  numberError: boolean;
  setNumberError: React.Dispatch<React.SetStateAction<boolean>>;
  dateError: boolean;
  setDateError: React.Dispatch<React.SetStateAction<boolean>>;
}
