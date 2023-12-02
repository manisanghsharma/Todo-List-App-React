import { useState, useRef } from "react";
import { nanoid } from "nanoid";
const Input = ({notes, setNotes}) => {
    const [input, setInput] = useState('')
	const inputRef = useRef();
    const handleCreate = () => {
		if(input){
			const id = nanoid();
			const checked = false;
			const item = input;
			const newItem = { id, checked, item };
			const updatedItems = [...notes, newItem];
			setNotes(updatedItems);
			setInput("");
			inputRef.current.focus();
		}
	};

	
  return (
		<div className='relative my-2'>
			<input
				ref={inputRef}
				type='text'
				id='addtask'
				className='w-full relative text-lg py-4 pl-7	 pr-[125px] outline-none bg-gray-200 rounded-full'
				placeholder='Add Text...'	
                value={input}
                onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={() => handleCreate()} className='absolute text-xl text-white font-semibold px-10 py-4 bg-red-500 rounded-full right-0'>Add</button>
		</div>
	);
}
export default Input