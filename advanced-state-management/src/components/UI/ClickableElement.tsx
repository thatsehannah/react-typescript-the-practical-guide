import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

type LinkProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

type ClickableElementProps = ButtonProps | LinkProps;

const isLinkProps = (props: ClickableElementProps): props is LinkProps => {
  return 'href' in props;
};

const ClickableElement = (props: ClickableElementProps) => {
  if (isLinkProps(props)) {
    return (
      <a
        className='button'
        {...props}
      ></a>
    );
  }

  return (
    <button
      className='button'
      {...props}
    ></button>
  );
};

export default ClickableElement;
