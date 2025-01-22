import React from 'react';
import TodoList from '../components/TodoList';
import './App.css'
// import Checkbox from '../components/Complete';

function App() {
 return (
 <div className="App">
  <h1>Create To Do List</h1>
 <TodoList />
 {/* <Checkbox /> */}
 </div>
 ); 
}


export default App;

