import FeedPostButton from './FeedPostButton';

import {
  ThumbUpIcon,
} from '@heroicons/react/solid';
import {
  ShareIcon,
  ChatAltIcon,
} from '@heroicons/react/outline';

const FeetPost = (props) => {
  const {
    userimg, username,
    text, imgSrc
  } = props;
  return (
    <div className="p-3.5 bg-white rounded-xl shadow">
  	  <div className="flex items-center justify-start">
  	    <img
  	      src={userimg}
  		  className="h-8 w-8 rounded-full cursor-pointer"
  		  alt=""
  		/>
        <p className="ml-2 cursor-pointer">{username}</p>
  	  </div>

      <div className="my-2">
  	    {text}
  	  </div>

  	  {imgSrc && <div className="flex justify-center -mx-3.5 min-h-[10rem] bg-slate-100">
  	    <img
  		  src={imgSrc}
  		  className="object-scale-down max-h-[40rem]" alt=""/>
  	  </div>

  	  <div className="flex mt-3.5 items-center justify-between md:justify-evenly space-x-2">
  	    <FeedPostButton Icon={ThumbUpIcon} title="Like"/>
  	    <FeedPostButton Icon={ChatAltIcon} title="Comment"/>
  	    <FeedPostButton Icon={ShareIcon} title="Share"/>
  	  </div>
  	</div>
  )
}

export default FeedPost;
