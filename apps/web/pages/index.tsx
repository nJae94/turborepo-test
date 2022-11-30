import { Button } from 'ui';
import styled from 'styled-components';
import { useState } from 'react';
import { test, test2 } from 'utils';
import { Person } from 'type';
import DefaultInput from 'ui/Input/DefaultInput';

export default function Web() {
  const click = () => {
    setPerson({
      name: 'test',
      age: 29,
    });
    test();
    test2();
  };
  const [person, setPerson] = useState<Person | null>(null);

  return (
    <Wrapper>
      <Test>Web</Test>
      <DefaultInput />
      <Button onClick={click} />
      <div>{`${process.env.NEXT_PUBLIC_API_ENDPOINT}`}</div>
      <div>{`${process.env.NEXT_PUBLIC_ENVIRONMENT2}`}</div>
      <div>{`${process.env.NEXT_PUBLIC_TEST}`}</div>
      {person && <div>{person.name}</div>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Test = styled.h1`
  color: blue;
`;
