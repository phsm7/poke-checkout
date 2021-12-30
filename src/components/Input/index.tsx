import { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

export type InputProps = {
  label?: string;
  errorMessage?: string;
  width?: 'medium' | 'large';
  type?: string;
  validationOk?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label = 'Default Label',
  errorMessage = '',
  width = 'medium',
  type = 'text',
  validationOk = false,
  ...props
}: InputProps) => {
  return (
    <>
      <Styled.Container>
        <Styled.InputWrapper>
          <Styled.Input
            {...props}
            placeholder="nao remover esse placeholder"
            type={type}
            width={width}
            errorMessage={errorMessage}
            autoComplete="off"
          />
          <Styled.Label>
            <span className="content__name">{label}</span>
          </Styled.Label>
        </Styled.InputWrapper>
      </Styled.Container>
      {validationOk && <Styled.ValidationOk>{}</Styled.ValidationOk>}
      {!!errorMessage && <Styled.Error>{errorMessage}</Styled.Error>}
    </>
  );
};
