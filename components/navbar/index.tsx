import NavItem from './NavItem';

import {
  HomeIcon,
  UserGroupIcon,
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
          <div className="icon">
            <svg width="24" height="24"
              className="h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="grid"><rect width="24" height="24" opacity="0"/><path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/><path d="M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/></g></g>
            </svg>
          </div>
          <div className="icon">
            <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-6">
              <path d="M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z"/>
            </svg>
          </div>
          <div className="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg"
              className="h-6" fill="currentColor"><g id="e6aa2fe1-efbb-451f-ba3c-57a42a00cf33" data-name="bell"><path d="M22.29,17.29l-2.71-2.71A2,2,0,0,1,19,13.17V9.29A7.19,7.19,0,0,0,12.22,2,7,7,0,0,0,5,9v4.17a2,2,0,0,1-.59,1.41L1.71,17.29A1,1,0,0,0,2.41,19H21.59A1,1,0,0,0,22.29,17.29Z"/><path d="M8.14,21a4,4,0,0,0,7.72,0H8.14Z"/></g></svg>
          </div>
          <div className="icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330"
              width="24" height="24"
              className="translate-y-0.5" fill="currentColor"
              xmlSpace="preserve"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
            </svg>
          </div>
        </div>
      </nav>
   );
}

export default Navbar;
