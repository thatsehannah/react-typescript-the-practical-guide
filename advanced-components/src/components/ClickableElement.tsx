import { ComponentPropsWithoutRef, FC } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  element: 'button';
}

interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  element: 'link';
}

type ClickableElementProps = ButtonProps | LinkProps;

const ClickableElement: FC<ClickableElementProps> = ({ element, ...props }) => {
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
