import React from 'react';
import Todos from "./Components/Todos";
import './App.css';
import './index.css';

const App = () => {
  return (
    <div>
      <Todos listId="list1" />
      <Todos listId="list2" />
      <Todos listId="list3" />
    </div>
  );
}

export default App;
