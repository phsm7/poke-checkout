import Button from 'components/Button';
import { Input } from 'components/Input';
import usePokemons from 'context/hooks/usePokemons';
import paymentIcon from 'assets/payment_icon.svg';
import paymentIconTwo from 'assets/payment_icon_2.svg';
import * as Styled from './styles';
import useCheckout from 'context/hooks/useCheckout';

export default function CheckoutPayment() {
  const { setStep } = usePokemons();
  const {
    paymentFormSelected,
    setPaymentFormSelected,
    paymentDaySelected,
    setPaymentDaySelected,
    paymentData,
    setPaymentData,
    paymentStep,
    paymentErrors,
    handlePaymentSubmit,
  } = useCheckout();

  function handlePaymentDay(event: React.MouseEvent) {
    event.preventDefault();
    if (!paymentDaySelected) {
      return;
    }
    setStep((state) => state + 1);
  }

  return (
    <Styled.Wrapper>
      <Styled.AddressWrapper>
        <Styled.CepData>
          <span>CEP: 22345-678</span>
          <p>Alterar</p>
        </Styled.CepData>
        <Styled.AddressData>
          <span>
            Rua Conde de Bonfim
            <br /> Tijuca
            <br /> Rio de Janeiro - RJ
          </span>
          <p>Alterar</p>
        </Styled.AddressData>
      </Styled.AddressWrapper>
      <Styled.PaymentOptionWrapper>
        <Styled.PaymentOption
          selected={paymentFormSelected === 'debito'}
          onClick={() => {
            setPaymentFormSelected('debito');
          }}
        >
          <img src={paymentIcon} alt="imagem de um simbolo monetário" />
          <span>Débito em conta</span>
        </Styled.PaymentOption>
        <Styled.PaymentOption
          selected={paymentFormSelected === 'boleto'}
          onClick={() => {
            setPaymentFormSelected('boleto');
          }}
        >
          <img src={paymentIconTwo} alt="imagem de um simbolo monetário" />
          <span>Boleto bancário</span>
        </Styled.PaymentOption>
      </Styled.PaymentOptionWrapper>
      {paymentStep === 1 && (
        <Styled.Form onSubmit={(event) => handlePaymentSubmit(event)}>
          <Input
            width="large"
            type="text"
            name="Banco"
            label="Banco"
            errorMessage={paymentErrors.bank}
            value={paymentData.bank}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setPaymentData({ ...paymentData, bank: target.value })
            }
          />
          <Input
            width="large"
            type="text"
            name="agency"
            errorMessage={paymentErrors.agency}
            label="Agência (sem dígito)"
            maxLength={4}
            value={paymentData.agency}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setPaymentData({
                ...paymentData,
                agency: target.value,
              })
            }
          />
          <Input
            width="large"
            type="text"
            name="account"
            maxLength={5}
            errorMessage={paymentErrors.account}
            label="Número Conta corrente"
            value={paymentData.account}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setPaymentData({
                ...paymentData,
                account: target.value,
              })
            }
          />
          <Input
            width="large"
            type="text"
            name="digit"
            errorMessage={paymentErrors.digit}
            maxLength={1}
            label="Dígito da conta corrente"
            value={paymentData.digit}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setPaymentData({
                ...paymentData,
                digit: target.value,
              })
            }
          />
          <Button size="large" color="gray" type="submit">
            CONTINUAR
          </Button>
        </Styled.Form>
      )}

      {paymentStep === 2 && (
        <>
          <Styled.SelectDayWrapper>
            <h1>Dia do vencimento</h1>
            <Styled.SelectDayItems>
              <Styled.SelectDayItem
                selected={paymentDaySelected === '02'}
                onClick={() => setPaymentDaySelected('02')}
              >
                <span>02</span>
              </Styled.SelectDayItem>
              <Styled.SelectDayItem
                selected={paymentDaySelected === '05'}
                onClick={() => setPaymentDaySelected('05')}
              >
                <span>05</span>
              </Styled.SelectDayItem>
              <Styled.SelectDayItem
                selected={paymentDaySelected === '10'}
                onClick={() => setPaymentDaySelected('10')}
              >
                <span>10</span>
              </Styled.SelectDayItem>
              <Styled.SelectDayItem
                selected={paymentDaySelected === '15'}
                onClick={() => setPaymentDaySelected('15')}
              >
                <span>15</span>
              </Styled.SelectDayItem>
              <Styled.SelectDayItem
                selected={paymentDaySelected === '20'}
                onClick={() => setPaymentDaySelected('20')}
              >
                <span>20</span>
              </Styled.SelectDayItem>
            </Styled.SelectDayItems>
          </Styled.SelectDayWrapper>

          <Button
            size="large"
            color="gray"
            type="button"
            onClick={(event: React.MouseEvent) => handlePaymentDay(event)}
          >
            CONTINUAR
          </Button>
        </>
      )}
    </Styled.Wrapper>
  );
}
