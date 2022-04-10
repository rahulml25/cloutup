
const MakePostButton = (props) => {
  const {Icon, title, className} = props;
  return (
    <button className="flex flex-1 p-2 md:p-4 items-center justify-center bg-gray-100 space-x-2 rounded-xl">
   	  <Icon className={`h-6 ${className}`} />
      <p className="text-sm md:text-normal">Photo / Video</p>
      {props?.children}
    </button>
  )
}

export MakePostButton;
