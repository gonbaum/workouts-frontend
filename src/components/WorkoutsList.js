import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styled from 'styled-components'

import Pagination from './Pagination'

const propTypes = {
  isLoading: PropTypes.bool,
  workouts: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  count: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  handlePageChange: PropTypes.func.isRequired
};

const WorkoutsList = ({ isLoading, workouts, currentPage, count, handlePageChange }) => {
  return (
    <WorkoutsContainer >
        <div className="row">
        
        {isLoading ? (
            <p>loading...</p>
        ) : (
            <GridOfThree>
            {workouts.map((workout, i) => (
                <div className="item" key={workout._id}>
                    <div style={{margin: '15px'}}>
                        <Link to={`/workouts/${workout._id}`}>
                            <p>{workout.name}</p>
                        </Link>
                    </div>
                </div>
            ))}
            </GridOfThree>
        )}
        
        {isLoading ? (
            <p></p>
        ) : (
        <Pagination
            postsPerPage={20}
            totalPosts={count}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
        />)}
        </div>
    </WorkoutsContainer>
  )
}

const WorkoutsContainer = styled.div `
    margin: 0 auto;
    padding: 5px 25px 5px 25px;
    .row {
        display:flex;  
        padding: 10px;
        align-center: center;
        flex-direction: column;
    }
`

const GridOfThree = styled.div `
 
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 15px;

    @media (max-width: 1200px) {
          blackground-color: red;
          flex-direction: column;
    }

    
    @media only screen and (min-width: 1200px) {
        .item{
            flex-basis:33.33333333%;
            max-width: 33.33333333%;
            padding: 0 1rem;
            align-items: center;
        }
    }

`

WorkoutsList.propTypes = propTypes;

export default WorkoutsList;
