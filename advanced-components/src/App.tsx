import { FC } from 'react';
import Input from './components/Input';

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
    </main>
  );
};

export default App;
