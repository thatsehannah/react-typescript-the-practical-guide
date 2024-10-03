import { FC, FormEvent, useRef } from 'react';

type NewGoalProps = {
  onAddGoal: (newGoalTitle: string, newGoalDesc: string) => void;
};

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newGoalTitle = titleRef.current!.value;
    const newGoalDesc = descriptionRef.current!.value;

    e.currentTarget.reset(); //resets the input elements in the form
    onAddGoal(newGoalTitle, newGoalDesc);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='title'>Your goal</label>
        <input
          id='title'
          type='text'
          ref={titleRef}
        />
      </p>
      <p>
        <label htmlFor='description'>Short summary</label>
        <input
          id='description'
          type='text'
          ref={descriptionRef}
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
