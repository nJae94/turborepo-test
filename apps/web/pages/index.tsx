import { Button } from 'ui';
import styled from 'styled-components';
import { useState } from 'react';
import { test, test2 } from 'utils';
import { Person } from 'type';

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
    <div>
      <Test>Web</Test>
      <Button onClick={click} />
      <div>{`${process.env.NEXT_PUBLIC_API_ENDPOINT}`}</div>
      <div>{`${process.env.NEXT_PUBLIC_ENVIRONMENT2}`}</div>
      <div>{`${process.env.NEXT_PUBLIC_TEST}`}</div>
      {person && <div>{person.name}</div>}
    </div>
  );
}

const Test = styled.h1`
  color: blue;
`;
