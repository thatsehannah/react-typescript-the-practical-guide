import { FC, PropsWithChildren } from 'react';

interface BaseProps {
  id: number;
  title: string;
  onDelete: (id: number) => void;
}

type CourseGoalProps = PropsWithChildren<BaseProps>;

const CourseGoal: FC<CourseGoalProps> = ({ id, title, onDelete, children }) => {
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
