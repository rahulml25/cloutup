
const ActiveFriend = ({name, img, active}) => {
  return (
  	<div className="flex relative items-center p-2 hover:bg-gray-200 space-x-2 rounded-md cursor-pointer">
      <img
  	    src={img}
  		className="h-9 rounded-full" alt=""
  	  />
  	  <p>{name}</p>
  	  {active && <div className="absolute left-6 bottom-2 p-1 bg-green-400 border border-green-300 rounded-full"/>}
    </div>
  )
}

export default ActiveFriend;
