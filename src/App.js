import {useEffect, useState} from 'react';
import AddItem from './components/AddItem';
import PageWrapper from "./components/PageWrapper";
import TodoItem from './components/TodoItem';
import { useForm } from 'react-hook-form';
import "./styles/main.css";



function App() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const result = await fetch('http://localhost:3030/todos');
    return await result.json();
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  useEffect(() => {
    getData().then((res) => setTodos(res));
  }, []);

  return (
    <PageWrapper>
      <h2>To do</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Todo item" {...register("Todo item", {})} />
    
        <input type="submit" />
      </form>
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
