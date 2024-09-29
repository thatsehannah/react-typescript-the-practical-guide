import { ComponentPropsWithoutRef, FC } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  id: string;
}

const Input: FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
      />
    </p>
  );
};

export default Input;
