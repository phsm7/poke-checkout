import {
  CheckoutProviderProps,
  CheckoutTypes,
  PersonalDataProps,
} from 'context/types/CheckoutTypes';
import { createContext, useState } from 'react';
import { FormErrors } from 'utils/validations/getValidationErrors';
import {
  PaymentDataProps,
  PaymentDayProps,
  PaymentFormProps,
} from 'context/types/CheckoutTypes';
import { checkoutPaymentValidation } from 'utils/validations/checkoutPaymentValidation';
import { checkoutPersonalDataValidation } from 'utils/validations/checkoutPersonalDataValidation';

const CheckoutContext = createContext({} as CheckoutTypes);

const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const [paymentStep, setPaymentStep] = useState(1);
  const [paymentData, setPaymentData] = useState({} as PaymentDataProps);
  const [paymentDaySelected, setPaymentDaySelected] =
    useState<PaymentDayProps>('05');
  const [paymentFormSelected, setPaymentFormSelected] =
    useState<PaymentFormProps>('boleto');
  const [paymentErrors, setPaymentErrors] = useState<FormErrors>({});

  const [personalData, setPersonalData] = useState({} as PersonalDataProps);

  const [personalDataErrors, setPersonalDataErrors] = useState<FormErrors>({});

  async function handlePersonalDataSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setPersonalDataErrors({});

    const validationErrors = await checkoutPersonalDataValidation(personalData);

    if (validationErrors) {
      setPersonalDataErrors(validationErrors ? validationErrors : {});
      return false;
    }

    return true;
  }

  async function handlePaymentSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPaymentErrors({});
    const validationErrors = await checkoutPaymentValidation(paymentData);

    if (validationErrors) {
      setPaymentErrors(validationErrors ? validationErrors : {});
      return false;
    }
    setPaymentStep((state) => state + 1);

    return true;
  }

  return (
    <CheckoutContext.Provider
      value={{
        paymentFormSelected,
        setPaymentFormSelected,
        paymentDaySelected,
        setPaymentDaySelected,
        paymentData,
        setPaymentData,
        paymentStep,
        setPaymentStep,
        paymentErrors,
        handlePaymentSubmit,

        personalDataErrors,
        setPersonalData,
        personalData,
        handlePersonalDataSubmit,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export { CheckoutContext, CheckoutProvider };
