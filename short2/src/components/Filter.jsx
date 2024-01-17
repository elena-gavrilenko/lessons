import { ButtonGroup } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { FilterButton } from "./FilterButton"
import { getFilterType } from "../redux/todo/todoSelectors"
import { FILTER_TYPES } from "./constants/filters"
import { changeFilter } from "../redux/todo/todoActions"
// import { useState } from "react"


export const Filter = () => {
    // const [filterState, setFilterState] = useState(FILTER_TYPES.ALL)

    const dispatch = useDispatch()
    const currentFilterType = useSelector(getFilterType)
    console.log(currentFilterType)


    const changeFilterHandler = (filterType) => {
        // setFilterState(filterType)
        // console.log(filterType)
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
            {/* <FilterButton
                clickHandler={changeFilterHandler}
                filterType={FILTER_TYPES.ALL}
                disabled={filterState === FILTER_TYPES.ALL}
            >
                All
            </FilterButton>
            <FilterButton
                clickHandler={changeFilterHandler}
                filterType={FILTER_TYPES.DONE}
                disabled={filterState === FILTER_TYPES.DONE}
            >
                Done
            </FilterButton>
            <FilterButton
                clickHandler={changeFilterHandler}
                filterType={FILTER_TYPES.UNDONE}
                disabled={filterState === FILTER_TYPES.UNDONE}
            >
                Undone
            </FilterButton> */}
        </ButtonGroup>
    )
}