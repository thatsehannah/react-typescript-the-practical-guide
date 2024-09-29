import { FC } from 'react';
import Input from './components/Input';

const App: FC = () => {
  return (
    <main>
      <Input
        id='name'
        label='Your name'
      />
      <Input
        id='age'
        label='Your age'
      />
    </main>
  );
};

export default App;
