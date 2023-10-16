import { UserInput } from "./user-input";
import { Todo } from "./todo/index";
import { TodoList } from "./todo-list";

const userInput= new UserInput(document.body);

userInput.mount();

const todo=new Todo(document.body, 'some text');
const todoList=new TodoList<Todo>(document.body)

todo.mount();
userInput.mount();
todoList.mount();


userInput.onClick(todoList.todoAdd.bind(todoList))


