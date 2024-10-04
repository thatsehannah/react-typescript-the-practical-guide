import { PropsWithChildren } from 'react';

type BaseProps = {
  id: number;
  title: string;
  onDelete: (id: number) => void;
};

type CourseGoalProps = PropsWithChildren<BaseProps>;

const CourseGoal = ({ id, title, onDelete, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
