
const FeedPostButton = ({Icon, title}) => {
  return (
  	<button type="button"
  	  className="flex flex-1 p-2 pr-2.5 items-center justify-center space-x-1.5 text-gray-500 hover:text-blue-500 bg-gray-100 active:scale-[1.05] rounded-md"/>
      <Icon className="h-5"/>
  	  {title}
    </button>
  )
};

export default FeedPostButton;
