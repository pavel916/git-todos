import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  state = {
    label: ''
  }

  onLabelChangeTitle = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onLabelSubmit = (e) => {
    e.preventDefault()
    this.props.addTask(this.state.label)
    this.setState({ label: '' })
  }

  render() {
    return (
      <form action='' onSubmit={this.onLabelSubmit} className='new-todo-form'>
        <input
          onChange={this.onLabelChangeTitle}
          className='new-todo'
          placeholder='What needs to be done?'
          value={this.state.label}
        />
      </form>
    )
  }
}
NewTaskForm.defaultProps = {
  addTask: () => {},
}
NewTaskForm.propTypes = {
  addTask: PropTypes.func,
}
