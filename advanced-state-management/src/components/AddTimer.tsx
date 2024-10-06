import { useRef } from 'react';

import Button from './ui/ClickableElement.tsx';
import Form from './ui/Form.tsx';
import Input from './ui/Input.tsx';
import { FormHandle } from '../types/FormHandle.ts';

const AddTimer = () => {
  const formRef = useRef<FormHandle>(null);

  type ExtractedData = { name: string; duration: string };

  function handleSaveTimer(data: unknown) {
    const extractedData = data as ExtractedData;
    console.log(extractedData);
    formRef.current?.clear();
  }

  return (
    <Form
      ref={formRef}
      onSave={handleSaveTimer}
      id='add-timer'
    >
      <Input
        type='text'
        label='Name'
        id='name'
      />
      <Input
        type='number'
        label='Duration'
        id='duration'
      />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
};

export default AddTimer;
