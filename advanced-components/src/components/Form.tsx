import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import FormHandle from '../types/FormHandle';

type FormProps = {
  onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<'form'>;

//This comopnent is reusable and generic, designed to handle form submissions for various types of data. It doesn't need to know the specifics of the
//data structure - just that it will call onSave with whatever data it collects
const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const formRef = useRef<HTMLFormElement>(null); //Internal ref to the actual input element

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault(); //Prevents the default form submission

      const formData = new FormData(e.currentTarget); //Collect form data using FormData API
      const data = Object.fromEntries(formData); //Convert FormData to an object
      onSave(data); //Calls onsave with the processed form data (data), passing this data back to the parent component
    };

    //Expose the clear method to the parent through ref
    useImperativeHandle(ref, () => {
      return {
        clear: () => {
          console.log('Clearing form...');
          formRef.current?.reset();
        },
      };
    });

    //When you submit the form:
    //1. handleSubmit in the Form component is triggered
    //2. It collects the form data and calls function passed to onSave prop (which is handleSave in the App component)
    //3. handleSave processes the form data and logs it (for now)
    return (
      <form
        onSubmit={handleSubmit}
        {...otherProps}
        ref={formRef}
      >
        {children}
      </form>
    );
  }
);

export default Form;
