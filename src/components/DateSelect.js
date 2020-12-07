import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  selectDate: PropTypes.func.isRequired,
}

const DateSelect = ({ selectDate }) => {
  return (
    <div id="dateSelect">
      <b>Starting date:</b>
      <input type="date" name="date" className="select" onChange={(e) => selectDate(e)}></input>
    </div>
  )
}

DateSelect.propTypes = propTypes

export default DateSelect
