import Container from './components/Container';
import ClickableElement from './components/ClickableElement';

const App = () => {
  return (
    <main>
      <Container
        as={ClickableElement}
        element='button'
        onClick={() => alert('Clicked')}
      >
        Click Me
      </Container>
    </main>
  );
};

export default App;
