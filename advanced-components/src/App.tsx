import { FC } from 'react';
import Container from './components/Container';

const App: FC = () => {
  return (
    <main>
      <Container as='button' />
    </main>
  );
};

export default App;
