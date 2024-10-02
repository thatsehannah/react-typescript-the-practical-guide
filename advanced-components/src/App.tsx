import { FC } from 'react';
import Container from './components/Container';
import ClickableElement from './components/ClickableElement';

const App: FC = () => {
  return (
    <main>
      <Container
        as={ClickableElement}
        element='link'
        href='https://thatsehannah.com'
        target='/'
      >
        Click Me
      </Container>
    </main>
  );
};

export default App;
