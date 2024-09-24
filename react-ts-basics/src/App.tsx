import { useState } from 'react';
import './App.css';
import goalsImg from './assets/goals.jpg';

import Header from './components/Header';
import CourseGoalsList from './components/CourseGoalsList';

export interface CourseGoalItem {
  title: string;
  description: string;
  id: number;
}

const App = () => {
  const [goals, setGoals] = useState<CourseGoalItem[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalItem = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!',
      };
      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalsList goals={goals} />
    </main>
  );
};

export default App;
