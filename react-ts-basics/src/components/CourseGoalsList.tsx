import { FC } from 'react';
import CourseGoal from './CourseGoal';
import CourseGoalItem from '../interfaces/CourseGoalItem';

interface CourseGoalsListProps {
  goals: CourseGoalItem[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalsList: FC<CourseGoalsListProps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            onDelete={onDeleteGoal}
          >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalsList;
