import React from "react"
import PropTypes from "prop-types"

import styled from 'styled-components'

import { Link, Redirect } from "react-router-dom"

const propTypes = {
  workout: PropTypes.object,
}

const Workout = ({ workout }) => {

  if (workout) {
    return (
      <WorkoutsContainer>
      <div className="row workout">
        <p><b>Name:</b> {workout.name}</p>
        <p><b>Description:</b> {workout.description}</p>
        <p><b>Category:</b> {workout.category}</p>
        <p><b>Date:</b> {workout.startDate}</p>
      </div>
      <Link to={"/workouts"}>
        <button className="btn btn-primary">Back to workouts list</button>
      </Link>
      </WorkoutsContainer>
    )
  } else {
    return <Redirect to="/workouts" />
  }
}

const WorkoutsContainer = styled.div `
margin-bottom:10px;
    .row {
        width: 100%;
        display:block;  
        padding: 15px;
        align-center: center;
        margin-left: 0;
    }

    .btn {
      margin-left: 15px;
    }
`

Workout.propTypes = propTypes

export default Workout;
