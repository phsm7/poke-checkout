import { SetStateAction } from 'react';
import { FormErrors } from 'utils/validations/getValidationErrors';

export type CheckoutProviderProps = {
  children: React.ReactNode;
};

export type CheckoutTypes = {
  handlePersonalDataSubmit: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<boolean>;
  handlePaymentSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  personalDataErrors: FormErrors;
  paymentErrors: FormErrors;

  paymentData: PaymentDataProps;
  paymentStep: number;
  paymentFormSelected: PaymentFormProps;
  paymentDaySelected: PaymentDayProps;
  setPaymentData: React.Dispatch<SetStateAction<PaymentDataProps>>;
  setPaymentStep: React.Dispatch<SetStateAction<number>>;
  setPaymentFormSelected: React.Dispatch<SetStateAction<PaymentFormProps>>;
  setPaymentDaySelected: React.Dispatch<SetStateAction<PaymentDayProps>>;

  personalData: PersonalDataProps;
  setPersonalData: React.Dispatch<SetStateAction<PersonalDataProps>>;
};

export type PaymentDataProps = {
  bank: string;
  agency: string;
  account: string;
  digit: string;
};

export type PersonalDataProps = {
  cpf: string;
  phone: string;
  email: string;
  rg: string;
  birthday: string;
  motherName: string;
};

export type PaymentDayProps = '02' | '05' | '10' | '15' | '20';

export type PaymentFormProps = 'boleto' | 'debito';
