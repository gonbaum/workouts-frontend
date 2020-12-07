import React from 'react'
import PropTypes from "prop-types"

import styled from 'styled-components'

import CategorySelect from './CategorySelect'
import DateSelect from './DateSelect'

const propTypes = {
    selectDate: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  }

const FiltersBar = ({ selectDate, selectCategory, categories }) => {
    return(
        <FilterBar>
            <div className="row">
            <h3>Workouts</h3> 
            </div>
            <div className="row">
                
                <DateSelect selectDate={selectDate} />
                <CategorySelect selectCategory={selectCategory} categories={categories} />
            </div>
        </FilterBar>
    )
}

const FilterBar = styled.div `
    
    padding: 5px 25px 5px 25px;
    
    .row {
        display:flex;  
        padding: 10px;
        align-center: center;
    }
    .select{
        align-center: center;
        height: 40px;
        padding: 0 1rem;
        margin: 0 1.5rem 1.5rem 1.5rem;
        font-size: 16px;
        color: #555;
        border: 1px solid #888;
        border-radius: 8px;
        outline: none;


        appearance: none;
        line-height: 1.2;
    }
`

FiltersBar.propTypes = propTypes

export default FiltersBar