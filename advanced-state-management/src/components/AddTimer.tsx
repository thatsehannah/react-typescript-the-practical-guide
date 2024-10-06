import { useRef } from 'react';

import Button from './ui/Button.tsx';
import Form, { FormHandle } from './ui/Form.tsx';
import Input from './ui/Input.tsx';

export default function AddTimer() {
  const form = useRef<FormHandle>(null);

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    form.current?.clear();
  }

  return (
    <Form
      ref={form}
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
}
