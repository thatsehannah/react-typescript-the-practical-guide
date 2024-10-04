import { FC, useRef } from 'react';
import Input from './components/Input';

const App: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input
        label='Test'
        id='test'
        ref={inputRef}
      />
    </main>
  );
};

export default App;
