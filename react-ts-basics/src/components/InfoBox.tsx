import { ReactNode } from 'react';

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};

type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
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
