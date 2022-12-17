import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task'

const TaskList = ({ todoData, filterMap, filterName, deleteTask, onTaskClick, setEditing, onchangeInputValue, editLabel}) => (
  <ul className='todo-list'>
    {todoData.filter(filterMap[filterName]).map((task) => (
      <Task 
        {...task} 
        key={task.id}
        deleteTask={deleteTask} 
        onTaskClick={onTaskClick} 
        setEditing={setEditing} 
        onchangeInputValue={onchangeInputValue} 
        editLabel={editLabel}/>
    ))}
  </ul>
)

TaskList.defaultProps = {
  filterMap: () => {},
}

TaskList.propTypes = {
  todoData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  filterMap: PropTypes.objectOf(PropTypes.func),
  filterName: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  onTaskClick: PropTypes.func.isRequired,
}

export default TaskList
