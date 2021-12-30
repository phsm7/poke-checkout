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
import * as yup from 'yup';

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

export default function CheckOut() {
  const navigate = useNavigate();
  const params = useParams();
  const [details, setDetails] = useState<PokemonsProps>({} as PokemonsProps);
  const { getPokemonDetails } = usePokemons();

  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState({} as PersonalDataProps);
  const [paymentData, setPaymentData] = useState({} as PaymentDataProps);

  const [imagePikachu, setImagePikachu] = useState('');

  const schemaPersonalData = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    website: yup.string().url(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

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
  }, [params.name]);

  function handlePersonalDataSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep((state) => state + 1);
  }
  function handlePaymentSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep((state) => state + 1);
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
                  value={personalData.cpf}
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
                  value={personalData.email}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPersonalData({ ...personalData, email: target.value })
                  }
                />
                <Input
                  width="large"
                  type="text"
                  name="rg"
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
              <Styled.Form onSubmit={(event) => handlePaymentSubmit(event)}>
                <Input
                  width="large"
                  type="text"
                  name="Banco"
                  label="Banco"
                  value={paymentData.bank}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPaymentData({ ...paymentData, bank: target.value })
                  }
                />
                <Input
                  width="large"
                  type="text"
                  name="agency"
                  label="Agência (sem dígito)"
                  value={paymentData.agency}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPaymentData({ ...paymentData, agency: target.value })
                  }
                />
                <Input
                  width="large"
                  type="text"
                  name="account"
                  label="Número Conta corrente"
                  value={paymentData.account}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPaymentData({ ...paymentData, account: target.value })
                  }
                />
                <Input
                  width="large"
                  type="text"
                  name="digit"
                  label="Dígito da conta corrente"
                  value={paymentData.digit}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setPaymentData({ ...paymentData, digit: target.value })
                  }
                />
                <Button size="large" color="gray" type="submit">
                  CONTINUAR
                </Button>
              </Styled.Form>
            )}
            {step === 3 && <CheckoutSuccess />}
          </Styled.Content>
        </div>
        <Footer textColor={step === 3 ? 'gray' : 'black'} />
      </Styled.Wrapper>
    </>
  );
}
