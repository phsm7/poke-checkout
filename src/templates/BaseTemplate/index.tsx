import * as Styled from './styles';
import backgroundImg from 'assets/background.png';

type TemplateProps = {
  children: React.ReactNode | React.ReactNode[];
  useBackground?: boolean;
};

export default function BaseTemplate({
  children,
  useBackground = false,
}: TemplateProps) {
  return (
    <Styled.Wrapper image={backgroundImg} useBackground={useBackground}>
      {children}
    </Styled.Wrapper>
  );
}
