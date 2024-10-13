import { useRef } from 'react';

import ClickableElement from './ui/ClickableElement.tsx';
import Form from './ui/Form.tsx';
import Input from './ui/Input.tsx';
import { FormHandle } from '../types/FormHandle.ts';
import { useTimersContext } from '../state/TimersContext.tsx';
import { Timer } from '../types/Timer.ts';

const AddTimer = () => {
  const formRef = useRef<FormHandle>(null);
  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    if (extractedData.name === '' || extractedData.duration === '') {
      throw new Error(
        'Name and/or duration field is empty. Please provide a value.'
      );
    }
    const newTimer: Timer = {
      name: extractedData.name,
      duration: +extractedData.duration, //converts the string to a number
    };
    console.log(typeof newTimer.duration);

    addTimer(newTimer);
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
        <ClickableElement>Add Timer</ClickableElement>
      </p>
    </Form>
  );
};

export default AddTimer;
