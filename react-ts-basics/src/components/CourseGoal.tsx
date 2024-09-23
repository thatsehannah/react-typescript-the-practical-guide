import React from 'react';

interface CourseGoalProps {
  title: string;
  description: string;
}

const CourseGoal = (props: CourseGoalProps) => {
  const { title, description } = props;

  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
