import React from 'react';

interface CourseGoalProps {
  title: string;
  children: React.ReactNode;
}

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
