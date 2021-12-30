import { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'normal' | 'large';
  color?: 'yellow' | 'blue' | 'gray';
  margin?: string;
  withBorder?: boolean;
  type?: string;
} & ButtonTypes;

const Button = ({
  children,
  type = 'button',
  size = 'normal',
  color = 'yellow',
  margin = '0',
  withBorder = true,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Wrapper
      {...props}
      type={type}
      size={size}
      color={color}
      withBorder={withBorder}
      margin={margin}
    >
      {children}
    </Styled.Wrapper>
  );
};

export default Button;
