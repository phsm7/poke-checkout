import Footer from 'components/Footer';
import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import pikachuBack from 'assets/pikachu_back.svg';
import { useNavigate, useParams } from 'react-router-dom';
import LeftArrow from 'assets/LeftArrow';
import CircleSteps from 'components/CircleSteps';
import { Input } from 'components/Input';
import { cpfMask } from 'utils/masks/cpfMask';
import Button from 'components/Button';
import CheckoutSuccess from 'components/CheckoutSuccess';
import usePokemons from 'context/hooks/usePokemons';
import { PokemonsProps } from 'context/types/Pokemons';
import * as Yup from 'yup';
import paymentIcon from 'assets/payment_icon.svg';
import paymentIconTwo from 'assets/payment_icon_2.svg';
import {
  FormErrors,
  getValidationErrors,
} from 'utils/validations/getValidationErrors';
import { checkoutPersonalDataValidation } from 'utils/validations/checkoutPersonalDataValidation';
type PersonalDataProps = {
  cpf: string;
  phone: string;
  email: string;
  rg: string;
  birthday: string;
  motherName: string;
};

type PaymentDataProps = {
  bank: string;
  agency: string;
  account: string;
  digit: string;
};

type PaymentDayProps = '02' | '05' | '10' | '15' | '20';

type PaymentFormProps = 'boleto' | 'debito';
export default function CheckOut() {
  const navigate = useNavigate();
  const params = useParams();
  const [details, setDetails] = useState<PokemonsProps>({} as PokemonsProps);
  const { getPokemonDetails } = usePokemons();
  const [errors, setErrors] = useState<FormErrors>({});

  const [step, setStep] = useState(1);
  const [paymentStep, setPaymentStep] = useState(1);
  const [personalData, setPersonalData] = useState({} as PersonalDataProps);
  const [paymentData, setPaymentData] = useState({} as PaymentDataProps);
  const [paymentDaySelected, setPaymentDaySelected] =
    useState<PaymentDayProps>('05');
  const [paymentFormSelected, setPaymentFormSelected] =
    useState<PaymentFormProps>('boleto');

  const [imagePikachu, setImagePikachu] = useState('');

  async function loadImagePikachu() {
    const response = await getPokemonDetails('pikachu');
    setImagePikachu(response.image);
  }

  useEffect(() => {
    loadImagePikachu();
  }, []);

  async function loadDetails(name: string) {
    const response = await getPokemonDetails(name);
    setDetails(response);
  }

  useEffect(() => {
    if (params.name !== undefined) {
      loadDetails(params.name);
    }
    const sessionStep = JSON.parse(
      sessionStorage.getItem('@mobi2buy/checkout/step')!
    );

    if (sessionStep) {
      setStep(parseInt(sessionStep));
    }
  }, [params.name]);

  async function handlePersonalDataSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const validationErrors = await checkoutPersonalDataValidation(personalData);

    if (validationErrors) {
      setErrors(validationErrors ? validationErrors : {});
      return;
    }

    setStep((state) => state + 1);
    sessionStorage.setItem('@mobi2buy/checkout/step', JSON.stringify(2));
  }
  function handlePaymentSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPaymentStep((state) => state + 1);
  }
  function handlePaymentDay(event: React.MouseEvent) {
    event.preventDefault();
    if (!paymentDaySelected) {
      return;
    }
    setStep((state) => state + 1);
    sessionStorage.setItem('@mobi2buy/checkout/step', JSON.stringify(3));
  }
  return (
    <>
      <Styled.Wrapper>
        {!(step === 3) && (
          <Styled.HeadingWrapper>
            <Styled.HeadingLeftIcon>
              <LeftArrow />
              <img
                src={pikachuBack}
                alt="icone para voltar - exibe o pikachu de costas"
                onClick={() => {
                  step > 1
                    ? setStep((state) => state - 1)
                    : navigate('/ofertas');
                }}
              />
            </Styled.HeadingLeftIcon>
            <span>21 99999-9999</span>
          </Styled.HeadingWrapper>
        )}
        <div>
          {step === 1 && <Styled.Title>Dados Pessoais</Styled.Title>}
          {step === 2 && <Styled.Title>Pagamento</Styled.Title>}
          {step === 3 && (
            <Styled.SuccessImageWrapper>
              <Styled.SucessImage
                src={imagePikachu}
                alt="imagem do pokemon pikachu"
              />
            </Styled.SuccessImageWrapper>
          )}
          <Styled.CircleWrapper>
            <CircleSteps step={step} />
          </Styled.CircleWrapper>
          <Styled.Content>
            {(step === 1 || step === 2) && (
              <Styled.OrderWrapper>
                <Styled.OrderTitle>Meu Pedido</Styled.OrderTitle>
                <Styled.OrderDescription>
                  <p>{details.name}</p>
                  <span>R$ {details.order},99</span>
                </Styled.OrderDescription>
              </Styled.OrderWrapper>
            )}
            {step === 1 && (
              <Styled.Form
                onSubmit={(event) => handlePersonalDataSubmit(event)}
              >
                <Input
                  width="large"
                  type="text"
                  name="cpf"
                  label="CPF"
                  placeholder="xxx.xxx.xxx-xx"
                  value={personalData.cpf}
                  errorMessage={errors.cpf}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPersonalData({
                      ...personalData,
                      cpf: cpfMask(target.value),
                    })
                  }
                />
                <Input
                  width="large"
                  type="text"
                  name="phone"
                  label="Telefone"
                  errorMessage={errors.phone}
                  value={personalData.phone}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPersonalData({ ...personalData, phone: target.value })
                  }
                />
                <Input
                  width="large"
                  type="text"
                  name="email"
                  label="Seu e-mail"
                  errorMessage={errors.email}
                  value={personalData.email}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPersonalData({ ...personalData, email: target.value })
                  }
                />
                <Input
                  width="large"
                  type="text"
                  name="rg"
                  errorMessage={errors.rg}
                  label="Número da sua identidade"
                  value={personalData.rg}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPersonalData({ ...personalData, rg: target.value })
                  }
                />
                <Input
                  width="large"
                  type="text"
                  name="birthday"
                  errorMessage={errors.birthday}
                  label="Data de nascimento"
                  value={personalData.birthday}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPersonalData({ ...personalData, birthday: target.value })
                  }
                />
                <Input
                  width="large"
                  type="text"
                  name="motherName"
                  errorMessage={errors.motherName}
                  label="Nome completo da sua mãe"
                  value={personalData.motherName}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPersonalData({
                      ...personalData,
                      motherName: target.value,
                    })
                  }
                />
                <Button size="large" type="submit" color="gray">
                  CONTINUAR
                </Button>
              </Styled.Form>
            )}
            {step === 2 && (
              <Styled.PaymentWrapper>
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
                    <img
                      src={paymentIcon}
                      alt="imagem de um simbolo monetário"
                    />
                    <span>Débito em conta</span>
                  </Styled.PaymentOption>
                  <Styled.PaymentOption
                    selected={paymentFormSelected === 'boleto'}
                    onClick={() => {
                      setPaymentFormSelected('boleto');
                    }}
                  >
                    <img
                      src={paymentIconTwo}
                      alt="imagem de um simbolo monetário"
                    />
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
                      value={paymentData.bank}
                      onChange={({
                        target,
                      }: React.ChangeEvent<HTMLInputElement>) =>
                        setPaymentData({ ...paymentData, bank: target.value })
                      }
                    />
                    <Input
                      width="large"
                      type="text"
                      name="agency"
                      label="Agência (sem dígito)"
                      value={paymentData.agency}
                      onChange={({
                        target,
                      }: React.ChangeEvent<HTMLInputElement>) =>
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
                      label="Número Conta corrente"
                      value={paymentData.account}
                      onChange={({
                        target,
                      }: React.ChangeEvent<HTMLInputElement>) =>
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
                      label="Dígito da conta corrente"
                      value={paymentData.digit}
                      onChange={({
                        target,
                      }: React.ChangeEvent<HTMLInputElement>) =>
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
                      onClick={(event: React.MouseEvent) =>
                        handlePaymentDay(event)
                      }
                    >
                      CONTINUAR
                    </Button>
                  </>
                )}
              </Styled.PaymentWrapper>
            )}
            {step === 3 && <CheckoutSuccess />}
          </Styled.Content>
        </div>
        <Footer textColor={step === 3 ? 'gray' : 'black'} />
      </Styled.Wrapper>
    </>
  );
}
