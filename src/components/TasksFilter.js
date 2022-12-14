import React from 'react'
import PropTypes from 'prop-types'

const TasksFilter = ({ filterList, setFilter }) => (
  <ul className='filters'>
    {filterList.map((i) => (
      <li key={i}>
        <button onClick={() => setFilter(i)} >
          {i}
        </button>
      </li>
    ))}
  </ul>
)

TasksFilter.defaultProps = {
  setFilter: () => {},
}

TasksFilter.propTypes = {
  filterList: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFilter: PropTypes.func,
  isPressed: PropTypes.string.isRequired,
}

export default TasksFilter
