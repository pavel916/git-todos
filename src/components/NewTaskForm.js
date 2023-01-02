import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  state = {
    label: '',
    labelMin: '',
    labelSec: '',
  }

  onLabelChangeTitle = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onLabelChangeMin = (e) => {
    this.setState({
      labelMin: e.target.value,
    })
  }

  onLabelChangeSec = (e) => {
    this.setState({
      labelSec: e.target.value,
    })
  }

  onLabelSubmit = (e) => {
    e.preventDefault()
    this.props.addTask(this.state.label, this.state.labelMin, this.state.labelSec)
    this.setState({ label: '', labelMin: '', labelSec: '' })
  }

  render() {
    return (
      <form onSubmit={this.onLabelSubmit} className='new-todo-form'>
        <input
          onChange={this.onLabelChangeTitle}
          className='new-todo'
          placeholder='What needs to be done?'
          value={this.state.label}
        />
        <input
          onChange={this.onLabelChangeMin}
          className='new-todo-form__timer'
          placeholder='Min'
          value={this.state.labelMin}
        />
        <input
          onChange={this.onLabelChangeSec}
          className='new-todo-form__timer'
          placeholder='Sec'
          value={this.state.labelSec}
        />
        <button type='submit' onSubmit={this.onLabelSubmit} />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
}
NewTaskForm.defaultProps = {
  addTask: () => {},
}
