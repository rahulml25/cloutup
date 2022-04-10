const MakePostButton from './MakePostButton';

import {
  VideoCamera,
} from '@heroicons/react/solid';
import {
  EmojiHappyIcon,
  PhotographIcon,
} from '@heroicons/react/outline';

const MakePost = () => {
  return (
  	<div className="mt-2.5 p-4 rounded-xl bg-white shadow">
  	  <div className="flex items-center space-x-2">
  	    <img
  	      src="/avatars/rahul.gif" alt=""
  		  className="h-8 w-8 rounded-full cursor-pointer"
  		/>
  		<div className="flex-1 p-2 rounded-full bg-gray-100">
  		  <input type="text"
  		    placeholder="What is in your mind, Rahul?"
  	        className="px-2 w-full bg-transparent outline-none"/>
  	    </div>
  	  </div>

      <div className="my-4 border-b" />

  	  <div className="flex items-center justify-between md:justify-evenly space-x-2">
  	    <MakePost Icon={VideoCameraIcon} title="Live Video" className="text-red-500"/>
  	    <MakePost Icon={PhotographIcon} title="Photo / Video" className="text-green-500">
          <input type="files" hidden/>
  	    </MakePost>
  	    <MakePost Icon={EmojiHappyIcon} title="Filling / Activity" className="text-yellow-500"/>
      </div>
    </div>
  )
}

export default MakePost;
