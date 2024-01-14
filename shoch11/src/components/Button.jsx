import Button from '@mui/material/Button';
import { Send } from '@mui/icons-material';

export const Btn = ({text, handleClick}) => {
    return (
        <Button startIcon={<Send />} variant='contained' onClick={handleClick}>
            {text}
        </Button>
    )
}
