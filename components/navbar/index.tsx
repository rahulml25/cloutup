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
            className="flex items-center justify-center ml-2 py-2 md:p-2 bg-gray-100 rounded-full"
            >
            <SearchIcon className="h-6 text-gray-500 cursor-pointer" />
            {/*<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="40" height="40"
              viewBox="0 0 30 30"
              className="h-6 text-gray-500 cursor-pointer">
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>*/}
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
          <ViewGrid className="icon"/>
          <ChatIcon className="icon"/>
          <BellIcon className="icon"/>
          <ChevronDownIcon className="icon"/>
        </div>
      </nav>
   );
}

export default Navbar;
