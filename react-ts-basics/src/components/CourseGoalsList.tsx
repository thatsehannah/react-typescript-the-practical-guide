import { ReactNode } from 'react';
import CourseGoal from './CourseGoal';
import CourseGoalItem from '../types/CourseGoalItem';
import InfoBox from './InfoBox';

type CourseGoalsListProps = {
  goals: CourseGoalItem[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalsList = ({ goals, onDeleteGoal }: CourseGoalsListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet. Start adding now!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox
        mode='warning'
        severity='medium'
      >
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
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
    </>
  );
};

export default CourseGoalsList;
