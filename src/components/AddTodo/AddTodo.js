import React from 'react'

const AddTodo = () => (
  <form onSubmit={(event) => {
    event.preventDefault()

    let input = event.target.userInput.value

    console.log(input)

  }}>
    <input type="text" name="userInput" />
    <button> Submit </button>
  </form>
)

export default AddTodo
