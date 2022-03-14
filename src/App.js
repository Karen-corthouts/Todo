import {useEffect, useState} from 'react';
import TodoItem from './components/TodoItem';
import PageWrapper from "./components/PageWrapper";
import "./styles/main.css";



function App() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const result = await fetch('http://localhost:3030/todos');
    return await result.json();
  };

  useEffect(() => {
    getData().then((res) => setTodos(res));
  }, []);

  return (
    <PageWrapper>
      <div>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </PageWrapper>
  )
}

export default App;
