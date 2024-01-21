import { ButtonGroup } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { FilterButton } from "./FilterButton"
import { getFilterType } from "../redux/todo/todoSelectors"
import { FILTER_TYPES } from "./constants/filters"
import { changeFilter } from "../redux/todo/todoActions"

export const Filter = () => {

    const dispatch = useDispatch()
    const currentFilterType = useSelector(getFilterType)
    console.log(currentFilterType)

    const changeFilterHandler = (filterType) => {
        dispatch(changeFilter(filterType))
    }

    return (
        <ButtonGroup variant="outlined">
            {
                Object.keys(FILTER_TYPES).map((filterType) => (
                    <FilterButton
                        filterType={filterType}
                        clickHandler={changeFilterHandler}
                        disabled={filterType === currentFilterType}
                        key={filterType}
                    />
                ))
            }
        </ButtonGroup>
    )
}