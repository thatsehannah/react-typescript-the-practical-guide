import Container from './components/Container';
import ClickableElement from './components/ClickableElement';
import Form from './components/Form';
import Input from './components/Input';

const App = () => {
  return (
    <main>
      <Form>
        <Input
          type='text'
          label='Name'
          id='name'
        />
        <Input
          type='number'
          label='Age'
          id='age'
        />
        <p>
          <ClickableElement element='button'>Save</ClickableElement>
        </p>
      </Form>
    </main>
  );
};

export default App;
