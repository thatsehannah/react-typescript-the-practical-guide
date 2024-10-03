import { FC, PropsWithChildren } from 'react';

type BaseProps = {
  image: {
    src: string;
    alt: string;
  };
};

type HeaderProps = PropsWithChildren<BaseProps>;

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
