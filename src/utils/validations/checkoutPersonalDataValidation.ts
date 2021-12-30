import * as Yup from 'yup';
import { getValidationErrors } from './getValidationErrors';

type Values = {
  [k: string]: string;
};

export const checkoutPersonalDataValidation = async (values: Values) => {
  try {
    const schema = Yup.object().shape({
      cpf: Yup.string().required('Campo obrigatório'),
      phone: Yup.number().required('Campo obrigatório'),
      email: Yup.string().email().required('Campo obrigatório'),
      rg: Yup.string().required('Campo obrigatório'),
      birthday: Yup.string().required('Campo obrigatório'),
      motherName: Yup.string().required('Campo obrigatório'),
    });

    await schema.validate(values, { abortEarly: false });
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return getValidationErrors(err);
    }
  }
};
