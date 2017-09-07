const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
})

const RECEIVE_TODOS = 'RECEIVE_TODOS'
const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
})

export const saveTodo = (text) => {
  return dispatch => {
    fetch('http://localhost:8080/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        text
      })
    })
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)))
    .catch(err => console.log(err))
  }
}

export const getTodos = () => {
  return dispatch => {
    fetch('http://localhost:8080/api/todo')
    .then(response => response.json())
    .then(todos => dispatch(receiveTodos(todos)))
    .catch(err => console.log(err))
  }
}  
