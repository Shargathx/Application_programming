import './App.css';
import { Header } from './components/Header';
import { TaskCard } from './components/TaskCard';

function App() {
  const taskOne = { id: 2, title: 'Learn React Props', completed: true };
  const taskTwo = { id: 3, title: 'Build a Task Tracker', completed: false };

  return (
    <div>
      <h1>Task Tracker</h1>
      <div className="app-container">
        <Header />
        <TaskCard task={taskOne} />
        <TaskCard task={taskTwo} />
      </div>
    </div>
  );
}

export default App;
