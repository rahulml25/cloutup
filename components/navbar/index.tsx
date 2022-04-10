import NavItem from './NavItem';

import {
  BellIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  ChevronDownIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';


const Navbar = () => {
  return (
    <nav className="flex p-2 items-center justify-between sticky top-0 bg-white shadow-md z-10">
        {/* Left Nav */}
        <div className="flex items-center">
          <img
            src="https://links.papareact.com/5me"
            className="h-9 w-9 md:h-11 md:w-11 cursor-pointer"
            alt=""
          />
          <div
            className="flex items-center justify-center ml-2 p-2 bg-gray-100 rounded-full"
            >
            <SearchIcon className="h-6 w-6 text-gray-500 cursor-pointer"/>
            <input
              type="text" placeholder="Search Facebook"
              className="hidden md:inline pr-2 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* Center Nav */}  
        <div className="flex items-center space-x-3 cursor-pointer">
          <NavItem Icon={HomeIcon}/>
          <NavItem Icon={FlagIcon}/>
          <NavItem Icon={PlayIcon}/>
          <NavItem Icon={ShoppingCartIcon}/>
          <NavItem Icon={UserGroupIcon}/>
        </div>
  
        <div className="flex items-center justify-end md:space-x-2">
          <div className="flex items-center cursor-pointer">
            <img
              src="/avatars/rahul.gif"
              className="h-9 w-9 md:h-11 md:w-11 rounded-full"
              alt=""/>
            <p className="hidden md:inline ml-2 font-[600]">Rahul Mondal</p>
          </div>
          <ViewGridIcon className="icon"/>
          <ChatIcon className="icon"/>
          <BellIcon className="icon"/>
          <ChevronDownIcon className="icon"/>
        </div>
      </nav>
   );
}

export default Navbar;
