import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from "../TextField";
import { Todo } from '../Todo';
import { Btn } from '../Button';
import { getTodos, getFilteredTodos } from '../../redux/todoSelectors';
import { addTodo, deleteTodo, doneTodo } from '../../redux/todoActions';
import { Filter } from '../Filter';



export const TodoListPage = () => {
    const [todoText, setTodoText] = useState('')

    const dispatch = useDispatch()
    const todos = useSelector(getFilteredTodos)
    // console.log(todos)

    const handleChange = ({ target: { value } }) => {
        setTodoText(value)
    }

    const handleClick = () => {
        // console.log('add todo')
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
            <h1 style={{ textAlign: 'center' }}>Todo list page</h1>
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
                {todos.map((todoData) => {
                    return <Todo
                        {...todoData}
                        handleDelete={handleDelete}
                        handleTodoClick={handleTodoClick}
                        key={todoData.id} />
                })}
            </Stack>
        </>

    )
}