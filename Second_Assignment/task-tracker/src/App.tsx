import './App.css';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div>
      <h1>Task Tracker</h1>
      <div className="app-container">
        <Header />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
