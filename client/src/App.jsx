import { useEffect, useState } from 'react'
import Input from './Components/Input'
import List from './Components/List';
function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('todo')) || []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(notes))
  }, [notes])

  return (
    <div className='flex flex-col px-10 py-6 w-full rounded-lg bg-white max-w-[600px] min-w-[200px] m-auto mt-[100px] max-md:mt-4 max-md:p-6'>
      <h1 className='flex items-center gap-2 text-3xl font-semibold'>Todo List 
      <img className='w-14' src="assets/icon.png" alt="" />
      </h1>
      <Input notes={notes} setNotes={setNotes}/>

      {notes.length ? (
        notes.map(note => (
          <List note={note} notes={notes} setNotes={setNotes} key={note.id}/>
        ))
      ) : (
        <p className='text-2xl font-medium mt-5 max-sm:text-xl max-sm:text-center'>No items on your Todo list!</p>
      )}
      
    </div>
  )
}

export default App
