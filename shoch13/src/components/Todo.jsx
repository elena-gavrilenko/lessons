import { Chip } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import CircleIcon from '@mui/icons-material/Circle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

// export const Todo = ({handleTodoClick, handleDelete, text, id, done }) => {
export const Todo = ({handleTodoClick, handleDelete, todo, id, completed }) => {
    return (
        <Chip
            clickable
            // label={text}
            label={todo}
            sx={{ fontSize: '20px', padding: 2.2 }}
            icon={completed ? <CheckCircleIcon /> : <CircleIcon />}
            // icon={done ? <CheckCircleIcon /> : <CircleIcon />}
            deleteIcon={<DeleteIcon />}
            onDelete={() => handleDelete(id)}
            onClick={() => handleTodoClick(id)}
        />
    )
}