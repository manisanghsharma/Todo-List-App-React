import { Check } from "react-feather";

const Checked = () => {
  return (
		<div className='w-10 h-10 rounded-full bg-red-500 flex items-center justify-center cursor-pointer'>
			<Check color='white' size={25} />
		</div>
	);
}
export default Checked