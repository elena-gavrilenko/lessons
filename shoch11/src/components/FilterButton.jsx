import Button from '@mui/material/Button';

export const FilterButton = ({children, filterType, clickHandler, disabled }) => {
    return (
        <Button
            disabled={disabled}
            onClick={() => clickHandler(filterType)}
        >
            {filterType}
            {/* {children} */}
        </Button>
    )
}