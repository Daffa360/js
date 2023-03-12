// Define a type for the data model
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Define an array to hold the data
let todos: Todo[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a CRUD app", completed: false },
];

// Define a function to create a new todo item
function createTodoItem(title: string): Todo {
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
}

// Define a function to retrieve all todo items
function getAllTodoItems(): Todo[] {
  return todos;
}

// Define a function to retrieve a todo item by its id
function getTodoItemById(id: number): Todo | undefined {
  return todos.find((todo) => todo.id === id);
}

// Define a function to update a todo item by its id
function updateTodoItemById(id: number, updates: Partial<Todo>): Todo | undefined {
  const todo = getTodoItemById(id);
  if (!todo) {
    return undefined;
  }
  Object.assign(todo, updates);
  return todo;
}

// Define a function to delete a todo item by its id
function deleteTodoItemById(id: number): Todo | undefined {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return undefined;
  }
  const deletedTodo = todos.splice(index, 1)[0];
  return deletedTodo;
}
