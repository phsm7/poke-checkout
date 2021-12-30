import * as Styled from './styles';

type CircleStepsProps = {
  step: number;
};

export default function CircleSteps({ step }: CircleStepsProps) {
  return (
    <Styled.Wrapper>
      <Styled.Circle className="activeCircle" isActive={step === 1}>
        1
      </Styled.Circle>
      <Styled.Circle className="activeCircle" isActive={step === 2}>
        2
      </Styled.Circle>
      <Styled.Circle className="activeCircle" isActive={step === 3}>
        3
      </Styled.Circle>
    </Styled.Wrapper>
  );
}
