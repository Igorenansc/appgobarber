import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export default function getValidationError(err: ValidationError): IErrors {
  const validationErrors: IErrors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path!] = error.message; // eslint-disable-line
  });

  return validationErrors;
}
