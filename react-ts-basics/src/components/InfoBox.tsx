import { FC, ReactNode } from 'react';

interface HintBoxProps {
  mode: 'hint';
  children: ReactNode;
}

interface WarningBoxProps {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox: FC<InfoBoxProps> = (props) => {
  const { mode, children } = props;

  switch (mode) {
    case 'hint': {
      return (
        <aside className='infobox infobox-hint'>
          <p>{children}</p>
        </aside>
      );
    }
    case 'warning': {
      const { severity } = props;
      return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
          <h2>Warning</h2>
          <p>{children}</p>
        </aside>
      );
    }
    default: {
      return null;
    }
  }
};

export default InfoBox;
