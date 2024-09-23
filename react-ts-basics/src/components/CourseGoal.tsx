import React, { FC, PropsWithChildren } from 'react';

interface BaseProps {
  title: string;
}

type CourseGoalProps = PropsWithChildren<BaseProps>;

const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
