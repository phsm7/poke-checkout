import desmaskPhone from 'utils/masks/desmaskPhone';
import desmaskCpf from 'utils/masks/desmaskCpf';
import * as Yup from 'yup';
import { getValidationErrors } from './getValidationErrors';

type Values = {
  [k: string]: string;
};

export const checkoutPersonalDataValidation = async (values: Values) => {
  const desmaskedValues = {
    ...values,
    cpf: values.cpf ? desmaskCpf(values.cpf) : values.cpf,
    phone: values.phone ? desmaskPhone(values.phone) : values.phone,
  };
  try {
    const schema = Yup.object().shape({
      cpf: Yup.string().required('Campo obrigatório').min(11, 'Mínimo 11'),
      phone: Yup.string().required('Campo obrigatório').min(11, 'Mínimo 11'),
      email: Yup.string()
        .email('Informe um email válido')
        .required('Campo obrigatório'),
      rg: Yup.string().required('Campo obrigatório'),
      birthday: Yup.string().required('Campo obrigatório'),
      motherName: Yup.string().required('Campo obrigatório'),
    });

    await schema.validate(desmaskedValues, { abortEarly: false });
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return getValidationErrors(err);
    }
  }
};
