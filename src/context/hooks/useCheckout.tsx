import { useContext } from 'react';
import { CheckoutTypes } from 'context/types/CheckoutTypes';
import { CheckoutContext } from 'context/provider/Checkout';

const useCheckout = (): CheckoutTypes => {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error('useCheckout must be used whit CheckoutContext');
  }

  return context;
};

export default useCheckout;
