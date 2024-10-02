import { FC } from 'react';
import Input from './components/Input';
import ClickableElement from './components/ClickableElement';

const App: FC = () => {
  return (
    <main>
      <Input
        id='name'
        label='Your name'
        type='text'
      />
      <Input
        id='age'
        label='Your age'
        type='number'
      />
      <p>
        <ClickableElement element='button'>A Button</ClickableElement>
      </p>
      <p>
        <ClickableElement
          element='link'
          href='https://google.com'
        >
          A Link
        </ClickableElement>
      </p>
    </main>
  );
};

export default App;
