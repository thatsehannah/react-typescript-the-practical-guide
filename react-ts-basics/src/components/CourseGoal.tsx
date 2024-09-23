import React, { PropsWithChildren } from 'react';

// interface CourseGoalProps {
//   title: string;
//   children: React.ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal = (props: CourseGoalProps) => {
  const { title, children } = props;

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
