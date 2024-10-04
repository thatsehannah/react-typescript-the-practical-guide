import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = ({ as, children, ...props }: ContainerProps<ElementType>) => {
  const Component = as || 'div';

  return <Component {...props}>{children}</Component>;
};

export default Container;
