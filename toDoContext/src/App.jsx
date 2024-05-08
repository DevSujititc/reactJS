import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    
    const newTodo = {
                      id: Date.now(), 
                      name: todo,
                      status: false
                    }
                    
    setTodos((prev) => [newTodo, ...prev])
    
  }

  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))    
  }
  
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo)=> prevTodo.id !== id))    
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === id ? {...prevTodo, status: !prevTodo.status} : prevTodo)))
  }

  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem("storeTodos"))
    if(storeTodos && storeTodos.length > 0){
      setTodos(storeTodos)
    }
  }, [])

  useEffect(() => {
    
    localStorage.setItem("storeTodos" , JSON.stringify(todos))
    
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, editTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {
              todos.map((todo)=>(
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
