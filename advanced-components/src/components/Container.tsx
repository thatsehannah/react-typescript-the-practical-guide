import { ComponentPropsWithoutRef, ElementType, FC, ReactNode } from 'react';

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container: FC<ContainerProps<ElementType>> = ({
  as,
  children,
  ...props
}) => {
  const Component = as || 'div';

  return <Component {...props}>{children}</Component>;
};

export default Container;
