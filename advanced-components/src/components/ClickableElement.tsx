import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  element: 'button';
} & ComponentPropsWithoutRef<'button'>;

type LinkProps = {
  element: 'link';
} & ComponentPropsWithoutRef<'a'>;

type ClickableElementProps = ButtonProps | LinkProps;

const ClickableElement = ({ element, ...props }: ClickableElementProps) => {
  switch (element) {
    case 'link': {
      const { ...linkAttrs } = props as LinkProps;
      return (
        <a
          className='button'
          {...linkAttrs}
        ></a>
      );
    }
    case 'button': {
      const { ...btnAttrs } = props as ButtonProps;
      return (
        <button
          className='button'
          {...btnAttrs}
        ></button>
      );
    }
  }
};

export default ClickableElement;
