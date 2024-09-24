import { useState } from 'react';
import './App.css';
import goalsImg from './assets/goals.jpg';

import Header from './components/Header';
import CourseGoalsList from './components/CourseGoalsList';
import CourseGoalItem from './interfaces/CourseGoalItem';
import NewGoal from './components/NewGoal';

const App = () => {
  const [goals, setGoals] = useState<CourseGoalItem[]>([]);

  const handleAddGoal = (newGoalTitle: string, newGoalDesc: string) => {
    const newGoal: CourseGoalItem = {
      id: Math.random(),
      title: newGoalTitle,
      description: newGoalDesc,
    };

    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalsList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
      />
    </main>
  );
};

export default App;
