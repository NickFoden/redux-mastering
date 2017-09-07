import React from 'react'
import { connect } from 'react-redux'
import { saveTodo } from '../../actions'

const AddTodo = (props) => (
  <form onSubmit={(event) => {
    event.preventDefault()

    let input = event.target.userInput.value
    props.dispatch(saveTodo(input))

    event.target.userInput.value = ''

  }}>
    <input type="text" name="userInput" />
    <button> Submit </button>
  </form>
)

export default connect()(AddTodo)
