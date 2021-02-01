import React, { useState, useEffect } from "react"
import workoutService from "./services/workouts"

import {
  Switch, Route, useRouteMatch
} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import WorkoutsList from "./components/WorkoutsList"
import FiltersBar from "./components/FiltersBar"
import Workout from './components/Workout'


import logo from './logo.svg'

const App = () => {

  /*  State definition
                                      */ 
  
  // Main workouts states:
  const [workouts, setWorkouts] = useState([])
  const [categories, setCategories] = useState([])
  const [count, setCount] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Filters states:
  const [filter, setFilter] = useState({
    params: {
      page: "",
      fromDate: "",
      cat: "",
    },
  })

  // Pagination state:
  const [currentPage, setCurrentPage] = useState(1)

  
  /*  Fetching logic
                                      */ 

  // Fetch initial workouts:
  useEffect(() => {
    setIsLoading(true)
    workoutService.getFilter(filter).then((data) => {
      setWorkouts(data.docs)
      setCategories(data.categories)
      setCount(data.count)
      setCurrentPage(data.activePage)
      setIsLoading(false)
    })
  }, [filter])


  /*  Methods
                                      */ 

  // Select methods to handle filtering options:
  const selectCategory = (e) => {
    let value = e.target.value
    let number = parseInt(value.split("").reverse().join("")) // Reverse string because parseInt() returns NaN if the string doesn't starts with a digit
    console.log(number)
    setFilter({
      params: {
        ...filter.params,
        cat: number,
      },
    })
    handlePageChange(1)
    console.log(filter)
  }

  const selectDate = (e) => {
    let value = e.target.value
    console.log(value)
    setFilter({
      params: {
        ...filter.params,
        fromDate: value,
      },
    })
    console.log(filter)
  }

  // Handle change of page for pagination
  const handlePageChange = (pageNumber) => {
    setFilter({
      params: {
        ...filter.params,
        page: pageNumber,
      },
    })
  }

  // Find match for workout id from parameters:
  const match = useRouteMatch('/workouts/:id')
  const workout = match 
    ? workouts.find(workout => workout._id === match.params.id)
    : null

  return (
    <div className="container-fluid pl-0 pr-0">
      <Header title='Workouts' logo={logo}  />

      <Switch>

        <Route path="/workouts/:id">
          <Workout workout={workout} />
        </Route>

        <Route path="/">
          <FiltersBar selectDate={selectDate} selectCategory={selectCategory} categories={categories} />
          <WorkoutsList
            isLoading={isLoading}
            workouts={workouts}
            currentPage={currentPage}
            count={count}
            handlePageChange={handlePageChange}
          />
        </Route>

      </Switch>  

      <Footer />
    </div>    
  )
}

export default App
