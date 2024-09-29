import { FC } from 'react';

interface InputProps {
  label: string;
  id: string;
}

const Input: FC<InputProps> = ({ label, id }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </p>
  );
};

export default Input;
