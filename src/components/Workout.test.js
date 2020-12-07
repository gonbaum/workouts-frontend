import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import { prettyDOM } from '@testing-library/dom'
import Workout from './Workout'

test('Renders content', () => {
    const workout = {
      name: 'Component testing is done with react-testing-library',
      description: 'This is mock description',
      category: 'c1',
      startDate: '2020-12-04T19:13:15.426Z'
    }
  
    const component = render(
      <Router>
        <Workout workout={workout} />
      </Router>
    )
    const div = component.container.querySelector('div')
    console.log(prettyDOM(div))

    component.debug()

    // method 1
    expect(component.container).toHaveTextContent(
      'Component testing is done with react-testing-library'
    )
  
    // method 2
    const element = component.getByText(
      'Component testing is done with react-testing-library'
    )
    expect(element).toBeDefined()
  
    // method 3
    const div2= component.container.querySelector('.workout')
    expect(div2).toHaveTextContent(
      'Component testing is done with react-testing-library'
    )

})
