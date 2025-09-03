
const counterInitial = { count: 0 };

export function counterReducer(state = counterInitial, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}


const todoInitial = { todos: [] };

export function todoReducer(state = todoInitial, action) {
  switch (action.type) {
    case "addTodo":
      return { todos: [...state.todos, action.payload] };
    case "removeTodo":
      return { todos: state.todos.filter((t, i) => i !== action.index) };
    default:
      return state;
  }
}
