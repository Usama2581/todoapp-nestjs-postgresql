import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [id, setId] = useState('')
  const [editMode, setEditMode] = useState('')
  const [text, setText] = useState()
  const [todo, setTodo] = useState([])

  // console.log(todo)

  const addTodo = () => {

    axios.post('https://nest-todo-backend.vercel.app/todo/post', { text })
      .then(res => console.log(res))
      .catch(err => {
        if (err.response.data.message === 'Task is available in your list') {
          alert(err.response.data.message)
        } else {
          console.log(err)
        }
      })

    setText("")
  }

  useEffect(() => {
    axios.get('https://nest-todo-backend.vercel.app/todo/get')
      .then(res => setTodo(res.data))
      .catch(err => console.log(err))
  }, [todo])


  const deleteToDo = (id) => {
    console.log(id)
    axios.delete(`https://nest-todo-backend.vercel.app/todo/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const update = (id, text) => {
    setEditMode(true)
    setId(id)
    // console.log(uid)
    setText(text)
  }
  // console.log(id)

  const updateTodo = () => {
    axios.put(`https://nest-todo-backend.vercel.app/todo/update/${id}`, { text })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    setText('')
    setEditMode(false)
  }
  return (

    <div className="parent">

      <div className='child'>
        <div className='head'>
          <h1>Todos-{(todo.length)}</h1>
        </div>
        <div className='inputbox'>
          <input type="text" onChange={e => setText(e.target.value)}
            placeholder='Enter todo here'
            value={text} />
          {
            editMode ?
              <button onClick={updateTodo} className='btn'>Update</button>
              :
              <button onClick={addTodo} className='btn' >Add</button>
          }
        </div>
        <div className='list'>
          {
            todo.map(item => {
              return (
                <div className='todo'>
                  <div>{item.text}</div>
                  <div className='icon'>
                    <i id='bin' class="fa-solid fa-trash" onClick={() => deleteToDo(item.id)}></i>
                    {/* <button onClick={() => update(item._id, item.text)}>Edit</button> */}
                    <i id='edit' onClick={() => update(item.id, item.text)} class="fa-regular fa-pen-to-square"></i>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>

  );
}

export default App;