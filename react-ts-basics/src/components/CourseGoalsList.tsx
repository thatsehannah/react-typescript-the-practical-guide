import { FC } from 'react';
import CourseGoal from './CourseGoal';
import CourseGoalItem from '../interfaces/CourseGoalItem';

interface CourseGoalsListProps {
  goals: CourseGoalItem[];
}

const CourseGoalsList: FC<CourseGoalsListProps> = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalsList;
