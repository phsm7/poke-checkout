import { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

export type InputProps = {
  label?: string;
  errorMessage?: string;
  width?: 'medium' | 'large';
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label = 'Default Label',
  errorMessage = 'Valor inválido',
  width = 'medium',
  type = 'text',
  ...props
}: InputProps) => {
  return (
    <Styled.Container>
      <Styled.InputWrapper>
        <Styled.Input
          {...props}
          placeholder="nao remover esse placeholder"
          type={type}
          width={width}
        />
        <Styled.Label>
          <span className="content__name">{label}</span>
        </Styled.Label>
      </Styled.InputWrapper>
    </Styled.Container>
    // {error && <Styled.Error>{errorMessage}</Styled.Error>}
  );
};
