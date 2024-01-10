import { ButtonGroup } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { FilterButton } from "./FilterButton";
import { getFilterType } from "../redux/todoSelectors";
import { FILTER_TYPES } from "./constans/filters";
import { changeFilter } from "../redux/todoActions";
// import { useState } from "react";




export const Filter = () => {

    // const [filterState, setfilterState] = useState(FILTER_TYPES.ALL)
    const dispatch=useDispatch()
    const currentFilterType = useSelector(getFilterType)
    console.log(currentFilterType)

    const changeFilterHandler = (filterType) => {
        // setfilterState(filterType)
        console.log(filterType)
        dispatch(changeFilter(filterType))
    }
    return (

        <ButtonGroup variant="outlined">
            {
                Object.keys(FILTER_TYPES).map((filterType) => {
                    return <FilterButton
                        filterType={filterType}
                        clickHandler={changeFilterHandler}
                        // disabled={filterType === filterState}
                        disabled={filterType === currentFilterType}
                        key={filterType}
                    />
                })
            }
            {/* <FilterButton
                clickHandler={changeFilterHandler}
                filterType={FILTER_TYPES.ALL}
                disabled={filterState===FILTER_TYPES.ALL}
            >
                All
            </FilterButton>
            <FilterButton
                clickHandler={changeFilterHandler}
                filterType={FILTER_TYPES.DONE}
                disabled={filterState===FILTER_TYPES.DONE}
            >
                Done
            </FilterButton>
            <FilterButton
                clickHandler={changeFilterHandler}
                filterType={FILTER_TYPES.UNDONE}
                disabled={filterState===FILTER_TYPES.UNDONEDONE}
            >
                Undone
            </FilterButton> */}
        </ButtonGroup>


    )
}