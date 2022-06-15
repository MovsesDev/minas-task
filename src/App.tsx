import React, { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { addTodo, deleteTodo, editTodo } from './feautures/todoSlice'
import { useAppDispatch, useAppSelector } from './hooks'
import { Todo, Todos } from './interfaces'

interface IDate {
  title: string
}

const App: React.FC = () => {

const [todo, setTodo] = useState<string | null>(null)
const [dates, setDates] = useState<IDate[]>([])
const [dateId, setDateId] = useState<string | null>(null)
const [todoEditing, setTodoEditing] = useState<string | null>()
const [value, setValue] = useState<string | null>(null)
const [dateValue, setDateValue] = useState<string | null>(null)
const dispatch = useAppDispatch()
const inputRef = useRef<HTMLInputElement>(null);
const todos = useAppSelector(state => state.todos.todos)


// const handleSubmit =  (e: React.MouseEvent<HTMLButtonElement>) => {
//   e.preventDefault()
//   dispatch(addTodo(todo))
//   setTodo('')
//   inputRef.current?.focus()
// }

// const handleEdit = (todo: Todo) => {
//   setTodoEditing(todo.id)
//   setValue(todo.title)
// }

// const handleEditSubmit = (todo: Todo) => {
//   dispatch(editTodo({id: todo.id, title: value || ''}))
//   setTodoEditing(null)
//   console.log(dateValue)

// }

const handleSubmit = (e:SyntheticEvent) => {
e.preventDefault()
const newDate = {
  title: dateValue ?? ''
}
setDates( dates.filter(date => date.title === newDate.title).length ===  0 ?  [newDate, ...dates] : [...dates])
dispatch(addTodo({title:todo ?? '', author:newDate.title}))

}

const openTodos = (id:string) => {
setDateId(id)

}

  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
         type="Enter todo"
         value={todo ?? ''}
         onChange={e => setTodo(e.target.value)}
         ref={inputRef}
         />
         <input type="date" value={dateValue ?? ''} onChange={e => setDateValue(e.target.value)}/>
         <button onClick={handleSubmit}>Add todo</button>
      </form>


{
  dates.map(d => <button onClick={() => openTodos(d.title)}>{d.title}</button>)
}

{todos.map(todo => todo.author === dateId ?  (<div> {todo.title}</div>) : null)}
      {/* {todos.map(todo => <div key={todo.id}>
{todoEditing === todo.id ? (
  <section>
    <input 
    type="text"
    value={value || ''}
    onChange={e => setValue(e.target.value)}
    />
    <button onClick={() => handleEditSubmit(todo)}>Submit</button>
  </section>
) : (
        <section>
      {todo.title}
      <button onClick={() => handleEdit(todo)}>Edit</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </section>
)}
      </div>)} */}

    </div>
  )
}

export default App