import * as React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
}
export const Button = ({ onClick }: Props) => {
  return <Btn onClick={onClick}>Boop</Btn>;
};

const Btn = styled.button`
  color: red;
`;
