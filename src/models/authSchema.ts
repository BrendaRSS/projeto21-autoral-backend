import joi from "joi";

export const signUpSchema = joi.object({
  name: joi.string().min(3).required(),
  birthday: joi.string().isoDate().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});