import { useState } from 'react';
import './App.css';
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';

interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const handleAddGoal = () => {
    setGoals();
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal title='Learn React + TS'>
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
};

export default App;
