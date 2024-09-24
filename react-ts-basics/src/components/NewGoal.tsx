import { FC, FormEvent, useState } from 'react';
import CourseGoalItem from '../interfaces/CourseGoalItem';

interface NewGoalProps {
  onAddGoal: (newGoal: CourseGoalItem) => void;
}

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newGoal: CourseGoalItem = {
      id: Math.random(),
      title: title,
      description: description,
    };

    onAddGoal(newGoal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='title'>Your goal</label>
        <input
          id='title'
          type='text'
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor='description'>Short summary</label>
        <input
          id='description'
          type='text'
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
