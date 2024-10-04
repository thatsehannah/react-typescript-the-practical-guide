import { PropsWithChildren } from 'react';

type BaseProps = {
  image: {
    src: string;
    alt: string;
  };
};

type HeaderProps = PropsWithChildren<BaseProps>;

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
