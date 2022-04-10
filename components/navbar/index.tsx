import NavItem from './NavItem';

import {
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import {
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
          <NavItem Icon={ShoppingCartIcon}/>
          <NavItem Icon={UserGroupIcon}/>
          <div className="md:p-4 md:bg-gray-100 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="24" height="24"
              viewBox="0 0 50 50"
              className="h-5 md:h-6 text-blue-500"
              fill="currentColor">
              <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
            </svg>
          </div>
          <div className="md:p-4 md:bg-gray-100 rounded-xl cursor-pointer">
            <svg width="24" height="24"
               version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 447.514 447.514"
               className="h-5 md:h-6 text-gray-500 hover:text-blue-500"
               fill="currentColor"
               xmlSpace="preserve">
               <path d="M389.183,10.118c-3.536-2.215-7.963-2.455-11.718-0.634l-50.653,24.559c-35.906,17.409-77.917,16.884-113.377-1.418
  	     c-38.094-19.662-83.542-18.72-120.789,2.487V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v407.514c0,11.046,8.954,20,20,20
  	     s20-8.954,20-20V220.861c37.246-21.207,82.694-22.148,120.789-2.487c35.46,18.302,77.47,18.827,113.377,1.418l56.059-27.18
  	     c7.336-3.557,11.995-10.993,11.995-19.146V20.385C394.866,16.212,392.719,12.333,389.183,10.118z"/>
               <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
          </div>
          <div className="md:p-4 md:bg-gray-100 rounded-xl cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              className="h-5 md:h-6 text-gray-600 hover:text-blue-500" fill="currentColor">
              <path d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M8,8.81797389 C8,8.48676533 8.09138399,8.16197812 8.2640927,7.87936387 C8.7824727,7.03110569 9.89035184,6.76368659 10.73861,7.28206659 L16.2248177,10.6347491 C16.4414031,10.7671068 16.6233909,10.9490946 16.7557486,11.16568 C17.2165308,11.9196873 16.978825,12.9044687 16.2248177,13.3652509 L10.73861,16.7179334 C10.4559958,16.8906421 10.1312086,16.9820261 9.8,16.9820261 C8.80588745,16.9820261 8,16.1761387 8,15.1820261 L8,8.81797389 Z M9,8.81797389 L9,15.1820261 C9,15.6238539 9.3581722,15.9820261 9.8,15.9820261 C9.9472038,15.9820261 10.0915537,15.941411 10.21716,15.8646516 L15.7033677,12.5119691 C15.9861204,12.3391758 16.0752601,11.9698827 15.9024668,11.68713 C15.8528326,11.6059105 15.7845872,11.5376651 15.7033677,11.4880309 L10.21716,8.13534842 C9.84015637,7.90495731 9.34776564,8.02381025 9.11737453,8.40081388 C9.04061511,8.52642021 9,8.67077009 9,8.81797389 Z"/>
            </svg>
          </div>
          <div className="md:p-4 md:bg-gray-100 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
              className="h-5 md:h-6 text-gray-500 hover:text-blue-500">
              <path d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H7.36729C6.86964 17 6.44772 16.6341 6.37735 16.1414L6.07143 14M2 3H4.5L4.78571 5M4.78571 5H5H21L18 14H6.5H6.07143M4.78571 5L6.07143 14M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="md:p-4 md:bg-gray-100 rounded-xl cursor-pointer">
            <svg width="24" height="24"
               className="h-5 md:h-6 text-gray-500 hover:text-blue-500"
               viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"/>
            </svg>
          </div>
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
