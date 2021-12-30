import * as Yup from 'yup';
import { getValidationErrors } from './getValidationErrors';

type Values = {
  [k: string]: string;
};

export const checkoutPaymentValidation = async (values: Values) => {
  try {
    const schema = Yup.object().shape({
      bank: Yup.string().required('Campo obrigatório'),
      agency: Yup.string().required('Campo obrigatório'),
      account: Yup.string().required('Campo obrigatório'),
      digit: Yup.string().required('Campo obrigatório'),
    });

    await schema.validate(values, { abortEarly: false });
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return getValidationErrors(err);
    }
  }
};
