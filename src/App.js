import React, { Component } from 'react'

import './App.css'

import NewTaskForm from './components/NewTaskForm'
import Footer from './components/Footer'
import TaskList from './components/TaskList'

export default class App extends Component {
  state = {
    todoData: [
      {
        id: 1,
        name: 'Completed task',
        done: true,
       
      },
      {
        id: 2,
        name: 'Editing task',
        done: true,
      
      },
      {
        id: 3,
        name: 'Active task',
        done: true,
       
      },
    ],
    filterTasks: 'All',
  }

  createTask = (text) => ({
    id: Date.now(),
    name: text,
    done: true,
    status: '',

  })

  onTaskClick = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          }
        }
        return task
      }),
    }))
  }



  deleteTask = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((i) => i.id !== id),
    }))
  }

  addTask = (text) => {
    this.setState(({ todoData }) => {
      const item = this.createTask(text)
      return {
        todoData: [...todoData, item],
      }
    })
  }

  clearCompletedTasks = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((i) => i.done === true),
    }))
  }

  setFilter = (name) => {
    this.setState(() => ({ filterTasks: name }))
  }

  render() {
    const filterMap = {
      All: () => true,
      Active: (task) => task.done,
      Completed: (task) => !task.done,
    }

    const filterNames = Object.keys(filterMap)

    const countItems = this.state.todoData.filter((i) => i.done === false).length
    return (
      <section className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <NewTaskForm addTask={this.addTask} />
        </header>
        <section className='main'>
          <TaskList
            addTask={this.addTask}
            deleteTask={this.deleteTask}
            onTaskClick={this.onTaskClick}
            todoData={this.state.todoData}
            filterMap={filterMap}
            filterName={this.state.filterTasks}
          />
          <Footer
            setFilter={this.setFilter}
            isPressed={this.state.filterTasks}
            clearCompletedTasks={this.clearCompletedTasks}
            countItems={countItems}
            filterList={filterNames}
          />
        </section>
      </section>
    )
  }
}
