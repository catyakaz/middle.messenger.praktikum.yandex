import { ERRORS } from '../constants';

export const ValidateRegex = {
  login: {
    pattern: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
    error: ERRORS.LOGIN,
  },
  email: {
    pattern: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
    error: ERRORS.EMAIL,
  },
  password: {
    pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    error: ERRORS.PASSWORD,
  },
  newPassword: {
    pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    error: ERRORS.PASSWORD,
  },
  oldPassword: {
    pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    error: ERRORS.PASSWORD,
  },
  first_name: {
    pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
    error: ERRORS.FIRST_NAME,
  },
  second_name: {
    pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
    error: ERRORS.SECOND_NAME,
  },
  phone: {
    pattern: /^[+-d]?\d{10,15}$/,
    error: ERRORS.PHONE,
  },
  message: {
    pattern: /(.|\s)*\S(.|\s)*/,
    error: ERRORS.MESSAGE,
  },
};
