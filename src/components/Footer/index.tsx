import * as Styled from './styles';

export type FooterProps = {
  textColor?: 'gray' | 'white' | 'black';
  backgroundColor?: string;
};

export default function Footer({
  textColor,
  backgroundColor = '',
}: FooterProps) {
  return (
    <Styled.Wrapper backgroundColor={backgroundColor}>
      <Styled.Text textColor={textColor}>Desenvolvido por Mobi2buy</Styled.Text>
    </Styled.Wrapper>
  );
}
