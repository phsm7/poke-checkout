import * as Styled from './styles';
import usePokemons from 'context/hooks/usePokemons';
import Button from 'components/Button';
import { Input } from 'components/Input';
import { cpfMask } from 'utils/masks/cpfMask';
import { phoneMask } from 'utils/masks/phoneMask';
import { stringMask } from 'utils/masks/stringMask';
import { numberMask } from 'utils/masks/numberMask';
import { useState } from 'react';
import useCheckout from 'context/hooks/useCheckout';

export default function CheckoutPersonalData() {
  const { setStep } = usePokemons();
  const {
    personalData,
    setPersonalData,
    handlePersonalDataSubmit,
    personalDataErrors,
  } = useCheckout();
  const [typeDate, setTypeDate] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await handlePersonalDataSubmit(event);
    if (result) {
      setStep((state) => state + 1);
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={(event) => handleSubmit(event)}>
        <Input
          width="large"
          type="text"
          name="cpf"
          label="CPF"
          value={personalData.cpf}
          errorMessage={personalDataErrors.cpf}
          validationOk={!personalDataErrors.cpf}
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
          errorMessage={personalDataErrors.phone}
          value={personalData.phone}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setPersonalData({
              ...personalData,
              phone: phoneMask(target.value),
            })
          }
        />
        <Input
          width="large"
          type="text"
          name="email"
          label="Seu e-mail"
          errorMessage={personalDataErrors.email}
          value={personalData.email}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setPersonalData({ ...personalData, email: target.value })
          }
        />
        <Input
          width="large"
          type="text"
          name="rg"
          maxLength={10}
          errorMessage={personalDataErrors.rg}
          label="Número da sua identidade"
          value={personalData.rg}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setPersonalData({ ...personalData, rg: numberMask(target.value) })
          }
        />
        <Input
          width="large"
          type={typeDate ? 'date' : 'text'}
          name="birthday"
          onFocus={() => setTypeDate((state) => !state)}
          onBlur={() => setTypeDate((state) => !state)}
          errorMessage={personalDataErrors.birthday}
          label="Data de nascimento"
          value={personalData.birthday}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setPersonalData({
              ...personalData,
              birthday: target.value,
            })
          }
        />
        <Input
          width="large"
          type="text"
          name="motherName"
          errorMessage={personalDataErrors.motherName}
          label="Nome completo da sua mãe"
          value={personalData.motherName}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setPersonalData({
              ...personalData,
              motherName: stringMask(target.value),
            })
          }
        />
        <Button size="large" type="submit" color="gray">
          CONTINUAR
        </Button>
      </Styled.Form>
    </Styled.Wrapper>
  );
}
