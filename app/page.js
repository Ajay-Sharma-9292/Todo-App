"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-3xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          <button
            onClick={
              ()=>{
                deleteHandler(i)
              }
            }
            className='bg-red-500 px-6 py-2 rounded font-bold text-white'>Delete</button>
        </li>
      );
    })
  }

  return (
    <>
      <h1 className='bg-black text-white text-center p-5 text-5xl font-bold'>
        Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
          placeholder='Enter task here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Enter Description here'
          className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button
          className='bg-black text-white font-bold rounded px-5 py-3 '
        >Add Task</button>
      </form>
      <hr />
      <div className='bg-slate-200 p-8'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page