import './App.css';
import { Header } from './components/Header'
import { TaskCard } from './components/TaskCard';

function App() {
  return (
    <div>
      <h1>Task Tracker</h1>
      <div className="app-container">
      <Header />
      <TaskCard />
      <TaskCard />
    </div>
    </div>
  );
}

export default App;