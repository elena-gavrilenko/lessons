import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '../components/TextField';
import { Todo } from '../components/Todo';
import { Btn } from '../components/Button';
import { Filter } from '../components/Filter';
import { TodosAppBar } from '../components/AppBar/AppBar';

import { getFilteredTodos } from '../redux/todo/todoSelectors';
import { addTodo, deleteTodo, doneTodo } from '../redux/todo/todoActions';





export const TodoListPage = () => {
    const [todoText, setTodoText] = useState('')

    const dispatch = useDispatch()
    const todos = useSelector(getFilteredTodos)
   

    const handleChange = ({ target: { value } }) => {
        setTodoText(value)
    }

    const handleClick = () => {
        dispatch(addTodo(todoText))
        setTodoText('')
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleTodoClick = (id) => {
        dispatch(doneTodo(id))
    }

    return (
        <>
            {/* <h1 style={{ textAlign: 'center' }}>Todo list page</h1> */}
          <TodosAppBar/>
            <Stack
                marginBottom={5}
                alignItems='center'
                justifyContent='center'
            >
                <Filter />
            </Stack>
            <Stack
                spacing={10}
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                <TextField
                    value={todoText}
                    fieldName='TODO'
                    handleChange={handleChange}
                />
                <Btn text='add' handleClick={handleClick} />
            </Stack>
            <Stack
                marginTop={10}
                spacing={5}
                justifyContent='center'
                alignItems='center'
            >
                {todos.map((todoData) =>(
                    <Todo
                        {...todoData}
                        handleDelete={handleDelete}
                        handleTodoClick={handleTodoClick}
                        key={todoData.id} />
                ))}
            </Stack>
        </>

    )
}