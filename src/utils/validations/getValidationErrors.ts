import * as Yup from 'yup';

export type FormErrors = {
  [k: string]: string;
};

export function getValidationErrors(err: Yup.ValidationError): FormErrors {
  const validationErrors: FormErrors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path!] = error.message;
  });

  return validationErrors;
}
