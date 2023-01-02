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
        min: 0,
        sec: 0
       
      },
      {
        id: 2,
        name: 'Editing task',
        done: true,
        min: 0,
        sec: 0
      
      },
      {
        id: 3,
        name: 'Active task',
        done: true,
        min: 0,
        sec: 0
       
      },
    ],
    filterTasks: 'All',
  }


  createTask = (name, min, sec) => ({
    id: Math.random(1, 500),
    name,
    done: true,
    min,
    sec
    

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

  editLabel = (name, id) => {
    this.setState(({ todoData }) => {
      const itemIdx = todoData.findIndex((element) => element.id === id)

      return {
        todoData: [
          ...todoData.slice(0, itemIdx),
          { ...todoData[itemIdx], name: name },
          ...todoData.slice(itemIdx + 1),
        ],
      }
    })
  }

  deleteTask = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((i) => i.id !== id),
    }))
  }

  addTask = (name, min, sec) => {
    this.setState(({ todoData }) => {
      const item = this.createTask(name, min, sec)
      if (name === '') return
      if (min === '') min = 0
      if (sec === '') sec = 0
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

    const countItems = this.state.todoData.filter((i) => i.done === true).length
    return (
      <section className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <NewTaskForm addTask={this.addTask} />
        </header>
        <section className='main'>
          <TaskList
            deleteTask={this.deleteTask}
            onTaskClick={this.onTaskClick}
            todoData={this.state.todoData}
            filterMap={filterMap}
            filterName={this.state.filterTasks}
            switchEditing={this.switchEditing}
            setEditing={this.setEditing}
            editLabel={this.editLabel}
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
