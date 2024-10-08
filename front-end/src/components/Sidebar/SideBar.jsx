import Conversations from "./Conversations";
import LogoutButton from "./LogOutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col pb-1'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;