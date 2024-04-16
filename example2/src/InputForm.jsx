import React from 'react'

const InputForm = ({ task, setTask, addTask }) => {
  return (
    <div>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} onKeyUp={addTask} />
    </div>
  )
}

export default InputForm