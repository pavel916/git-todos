import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task'

class TaskList extends React.Component {
  state = {}

  render() {

    const { todoData, filterMap, deleteTask, onTaskClick, filterName, setEditing, editLabel } = this.props
    

    return (
      <ul className='todo-list'>
        <li>
          {todoData.filter(filterMap[filterName]).map((task) => (
            <Task
              {...task}
              key={task.id}
              deleteTask={deleteTask}
              onTaskClick={onTaskClick}
              setEditing={setEditing}
              editLabel={editLabel}
            />
          ))}
        </li>
      </ul>
    )
  }
}

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

