import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import TaskDescription from './TaskDescription'

class Task extends React.Component {
  state = {
    isEditing: false,
    editedValue: '',
  }

  setEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }

  setEditedValue = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const { editedValue } = this.state
      this.props.editLabel(editedValue, this.props.id)
      this.setState({
        isEditing: false,
      })
    }
  }

  render() {
    const { done, id, name, deleteTask, onTaskClick, min, sec } = this.props
    const date = formatDistanceToNow(Date.now(), { includeSeconds: true, addSuffix: true })

    let classNameLabel = 'completed'
    if (done) classNameLabel = ''

    let classNameEdit = 'edit'
    if (this.state.isEditing) classNameEdit = 'edition'

    const formatToSec = (min, sec) => min * 60 + Number(sec)

    return (
      <div className={classNameLabel}>
        <div className='view'>
          <input
            id={id}
            className='toggle'
            type='checkbox'
            defaultChecked={!done}
            onChange={() => onTaskClick(id)}
          />
          <label htmlFor={id}>
            <span className='title'>{name}</span>
            <TaskDescription totalSec={formatToSec(min, sec)} />
            <span className='description'>{date}</span>
          </label>
          <button className='icon icon-edit' onClick={() => this.setEditing(id)} />
          <button className='icon icon-destroy' onClick={() => deleteTask(id)} />
        </div>
        <input
          type='text'
          className={classNameEdit}
          onChange={(e) => {
            this.setState({ editedValue: e.target.value })
          }}
          onKeyDown={this.setEditedValue}
        />
      </div>
    )
  }
}
Task.defaultProps = {
  deleteTask: () => {},
  onTaskClick: () => {},
  setEditing: () => {},
}

Task.propTypes = {
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  deleteTask: PropTypes.func,
  onTaskClick: PropTypes.func,
  setEditing: PropTypes.func,
}

export default Task
