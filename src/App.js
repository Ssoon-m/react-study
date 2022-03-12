import Todo from './components/Todo'
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return <div>
    <h1>리액트 연습</h1>
    <Todo text='리액트 props1' title="Add" />
    <Todo text='리액 props2' title="Delete" />
    
  </div>;

}

export default App;
