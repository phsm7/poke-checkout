import { InputHTMLAttributes, useState } from 'react';
import * as Styled from './styles';

import { BsEye, BsEyeSlash } from 'react-icons/bs';
// import { BiHelpCircle } from 'react-icons/bi';

export type InputProps = {
  label?: string;
  error?: string;
  warning?: string;
  width?: 'medium' | 'large';
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  error,
  warning,
  width = 'medium',
  type = 'text',
  ...props
}: InputProps) => {
  const [hidden, setHidden] = useState(false);
  const [typeValue, setTypeValue] = useState(type);

  const toggleTypeInput = () => {
    setHidden((prevState) => !prevState);
    setTypeValue((prevState) => (prevState === 'text' ? 'password' : 'text'));
  };

  return (
    <Styled.Wrapper>
      {!!label && (
        <Styled.Label htmlFor={label} aria-label={label}>
          {label}
        </Styled.Label>
      )}

      <Styled.Input {...props} width={width} error={error} type={typeValue} />

      {type === 'password' && (
        <Styled.WrapperIcon
          onClick={toggleTypeInput}
          aria-label="show or hidden value"
        >
          {hidden ? <BsEye size={16} /> : <BsEyeSlash size={16} />}
        </Styled.WrapperIcon>
      )}
      {warning && <Styled.Warning>{warning}</Styled.Warning>}
      {error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Wrapper>
  );
};
