import ActiveFriend from './ActiveFriend';

import {
  DotsHorizontalIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import {
  VideoCameraIcon,
} from '@heroicons/react/solid';

const Views = () => {
	return (
	<div className="hidden md:block mt-4 mr-2 w-1/6">
	  <div className="flex mb-2 space-x-2">
	    <p className="cursor-pointer">Contacts</p>
	    <VideoCameraIcon className="h-8 text-gray-500 cursor-pointer"/>
            <SearchIcon className="h-6 text-gray-500 cursor-pointer"/>
	    <DotsHorizontalIcon className="h-5 text-gray-500 cursor-pointer"/>
	  </div>
	
	  <div className="space-y-2">
	    <ActiveFriend active
	      name="Elon Musk"
	      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEw9SbR0vDPRlODfN41Dcy0e8AbmUI_CouA&usqp=CAU"
	    />
	  </div>
    </div>
  );
}

export default Views;
