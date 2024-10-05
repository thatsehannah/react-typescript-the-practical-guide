import ClickableElement from './components/ClickableElement';
import Form from './components/Form';
import Input from './components/Input';

//This component knows the specifics of the form data structure (i.e. name and age). Therefore, it defines the handleSave function to process
//this data when the form is submitted
const App = () => {
  type ExtractedFormData = {
    name: string;
    age: string;
  };

  const handleSave = (data: unknown) => {
    const formData = data as ExtractedFormData;
    console.log(formData);
  };

  //Duh momment:
  //In HTML, when a <button> element (in this case ClickableElement) is placed in side a <form>, clicking that button automatically triggers the form's
  //onSubmit event. You don't need to explicitly add an onClick handle to the button because this is a built-in behavior for forms
  return (
    <main>
      <Form onSave={handleSave}>
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
