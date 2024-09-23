import { FC, PropsWithChildren } from 'react';

interface BaseProps {
  image: {
    src: string;
    alt: string;
  };
}

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
