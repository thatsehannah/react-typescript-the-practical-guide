import React, { ElementType, FC } from 'react';

interface ContainerProps {
  as: ElementType;
}

const Container: FC<ContainerProps> = ({ as }) => {
  const Component = as;

  return <Component />;
};

export default Container;
