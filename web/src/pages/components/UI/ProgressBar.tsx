import React, { SFC } from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

interface Props {
  value: number;
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

const ProgressWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 10px;
  width: 100%;
  background: #aaa;
  border-radius: 10px;
`;

const PosedValue = posed.section({
  enter: {
    width: (props: Props) => `${props.value}%`,
    background: (props: Props) =>
      `${props.value > 90 ? 'green' : props.value > 50 ? 'yellow' : 'red'}`
  },
  exit: { width: '0px', background: 'white' },
  initialPose: 'exit'
});

const InnerValue = styled(PosedValue)`
  width: 0%;
  height: 10px;
  border-radius: 10px;
  background: ${(props: Props) => 'white'};
`;

const ProgressBar: SFC<Props> = props => (
  <Wrapper>
    <ProgressWrapper>
      <PoseGroup>{[<InnerValue key="0" {...props} />]}</PoseGroup>
    </ProgressWrapper>
    <small style={{margin: '0px 5px'}}>{`${props.value.toFixed(1)}%`}</small>
  </Wrapper>
);

export default ProgressBar;
