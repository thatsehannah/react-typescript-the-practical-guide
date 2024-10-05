import { ComponentPropsWithoutRef, FormEvent } from 'react';

type FormProps = {
  onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<'form'>;

//This comopnent is reusable and generic, designed to handle form submissions for various types of data. It doesn't need to know the specifics of the
//data structure - just that it will call onSave with whatever data it collects
const Form = ({ onSave, children, ...otherProps }: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //Prevents the default form submission

    const formData = new FormData(e.currentTarget); //Collect form data using FormData API
    const data = Object.fromEntries(formData); //Convert FormData to an object
    onSave(data); //Calls onsave with the processed form data (data), passing this data back to the parent component
  };

  //When you submit the form:
  //1. handleSubmit in the Form component is triggered
  //2. It collects the form data and calls function passed to onSave prop (which is handleSave in the App component)
  //3. handleSave processes the form data and logs it (for now)
  return (
    <form
      onSubmit={handleSubmit}
      {...otherProps}
    >
      {children}
    </form>
  );
};

export default Form;
