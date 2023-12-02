import { X } from "react-feather";
import Checked from './Checked'
import Unchecked from "./Unchecked";
import TextareaAutosize from "react-textarea-autosize";
const List = ({ note, notes, setNotes }) => {
	const handleDelete = (id) => {
		const updatedItems = notes.filter((note) => note.id != id);
		setNotes(updatedItems);
	};

	const handleCheck = (id) => {
		const updatedItems = notes.map(note => (
            note.id === id ? {...note, checked: !note.checked} : note
        ))
        setNotes(updatedItems);
	};
	return (
		<div className='flex items-center justify-between w-full my-3'>
			<div
				className='flex w-full gap-5 cursor-pointer items-center'
				onClick={() => handleCheck(note.id)}
			>
				{note.checked ? <Checked /> : <Unchecked />}
				<TextareaAutosize
					readOnly='true'
					className={
						"text-[21px] w-[80%] resize-none overflow-hidden outline-none cursor-pointer"
					}
					style={{
						textDecoration: note.checked ? "line-through" : null,
						color: note.checked ? "#555555" : "black",
					}}
					rows={1}
					value={note.item}
				/>
			</div>
			<div
				onClick={() => handleDelete(note.id)}
				className='p-2 rounded-full hover:bg-gray-300 transition-all'
			>
				<X size={25} className='cursor-pointer' />
			</div>
		</div>
	);
};
export default List;
