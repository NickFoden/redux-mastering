const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
})

export const saveTodo =  (text) => {
  return dispatch => {
    fetch('http://localhost:8080/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text
      })
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }
}
